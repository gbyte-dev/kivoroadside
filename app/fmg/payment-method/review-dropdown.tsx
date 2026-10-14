"use client";

import { useState, type ReactNode } from "react";
import { cx } from "@/app/components/services/class-names";
import { vehicleName, type FmgState } from "../fmg-state";
import { glassPieces } from "../order";
import { formatPhone } from "../ui/contact-modal";
import { SEMIBOLD } from "../ui/styles";
import { parseKey, longDate } from "../scheduling/slots";

// Blue round chevron after "Appointment details" and "Order details"
export const TOGGLE_CHEVRON =
  "relative right-3 my-2 ml-4 inline-flex size-6 shrink-0 cursor-pointer bg-[url(/image/fmg/ui/vin-toggle-chevron.svg)] bg-right bg-no-repeat transition-all duration-500 ease-[ease]";
export const RULE_FLUSH = "m-0 border-0 border-t border-current opacity-25";

// "3455 centerpoint dr, urbancrest, OH 43123": the reference lowercases the
// street and city and lets CSS capitalize each word
function serviceAddress(state: FmgState) {
  const appointment = state.appointment;
  if (appointment?.type === "Shop" && appointment.shop) {
    const [street = "", city = "", ...rest] = appointment.shop.address.split(", ");
    return `${street.toLowerCase()}, ${city.toLowerCase()}, ${rest.join(", ")}`;
  }
  const address = state.address;
  if (!address) return "";
  return `${address.street.toLowerCase()}${address.apt ? `, ${address.apt}` : ""}, ${address.city.toLowerCase()}, ${
    state.state ?? address.state
  } ${state.serviceZip ?? address.zip}`;
}

// "8:00 AM" from a slot label such as "8:00 am - 12:00 pm arrival"
const upper = (time: string) => time.trim().toUpperCase();

// Address, day and time in one line ("... on Friday, October 16, 2026
// arriving between 8:00 AM — 12:00 PM"), with the joining words in spans
// that stay lowercase
export function AppointmentWording({ state }: { state: FmgState }) {
  const appointment = state.appointment;
  if (!appointment) return null;
  const date = longDate(parseKey(appointment.date));
  let when: ReactNode;
  if (/Drop off/i.test(appointment.slotLabel)) {
    when = (
      <>
        {" "}
        <span className="lowercase">before</span> 9:30 AM
      </>
    );
  } else if (appointment.type === "Mobile") {
    const morning = /First stop|8:00 am/i.test(appointment.slotLabel);
    when = (
      <>
        {" "}
        <span className="lowercase">arriving between</span> {morning ? "8:00 AM" : "12:00 PM"} &mdash;{" "}
        {morning ? "12:00 PM" : "5:00 PM"}
      </>
    );
  } else {
    when = (
      <>
        {" "}
        <span className="lowercase">at</span> {upper(appointment.slotLabel)}
      </>
    );
  }
  return (
    <>
      {serviceAddress(state)} <span className="lowercase">on</span> {date}
      {when}
    </>
  );
}

// "Windshield", "Driver Front Glass", "Back Glass" joined with commas and a
// final "and", as the reference names the damaged glass
function glassPartsWording(state: FmgState) {
  const names = glassPieces(state.damage).map((piece) => {
    if (piece.location === "Windshield") return "Windshield";
    if (piece.location === "Rear") return "Back Glass";
    return `${piece.location} ${piece.name} Glass`;
  });
  if (names.length < 2) return names[0] ?? "";
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

function damageHeader(state: FmgState) {
  const pieces = glassPieces(state.damage);
  if (pieces.some((piece) => piece.location !== "Windshield")) return `Replace the ${glassPartsWording(state)} of your`;
  if (state.damage.windshieldDamage === "Repair") return "Repair the windshield of your";
  return "Replace the windshield";
}

function ReviewBlock({ header, lines }: { header: string; lines: ReactNode[] }) {
  return (
    <div className="py-3">
      <div className="flex">
        <div className="mt-0 w-full text-[14px] leading-[1.7] text-black">
          <span>
            <span className={SEMIBOLD}>{header}</span>
          </span>
        </div>
      </div>
      {lines.map((line, index) => (
        <div key={index} className="text-[14px] leading-[1.7]">
          {line}
        </div>
      ))}
    </div>
  );
}

// "Appointment details": the one-line summary, or when opened the service
// location, the vehicle, the contact details and the text message opt-in
export default function ReviewDropdown({ state }: { state: FmgState }) {
  const [expanded, setExpanded] = useState(false);
  const customer = state.customer;
  const phone = customer?.phone ? formatPhone(customer.phone) : "";
  return (
    <div>
      <div className="-mx-3 flex flex-wrap items-center pt-4" onClick={() => setExpanded((open) => !open)}>
        <a
          aria-label="expand appointment details"
          aria-expanded={expanded}
          href="#"
          onClick={(event) => event.preventDefault()}
          className="flex min-w-0 flex-[1_0_0%] justify-between px-3 py-0 no-underline"
        >
          <span className={cx(SEMIBOLD, "leading-[1.625] text-black")}>Appointment details</span>
        </a>
        <span aria-hidden="true" className={cx(TOGGLE_CHEVRON, expanded && "rotate-180")} />
      </div>
      {!expanded && (
        <div>
          <p className="mb-4 mt-3 p-0 text-[14px] capitalize">
            <AppointmentWording state={state} />
          </p>
        </div>
      )}
      <div
        className={cx(
          "overflow-hidden px-4",
          expanded
            ? "visible max-h-[800px] transition-all duration-150 ease-in"
            : "invisible max-h-0 transition-all duration-[350ms] ease-in",
        )}
      >
        <div className="-mt-3 [&_.review-block-content]:capitalize">
          <ReviewBlock
            header={state.appointment?.type === "Mobile" ? "We're coming to you" : "You're coming to us"}
            lines={[
              <p key="when" className="mb-0 mt-1 leading-[1.625] capitalize">
                <AppointmentWording state={state} />
              </p>,
            ]}
          />
        </div>
        <hr className={RULE_FLUSH} />
        <ReviewBlock header={damageHeader(state)} lines={[vehicleName(state.vehicle)]} />
        <hr className={RULE_FLUSH} />
        <ReviewBlock header="Contact details" lines={[customer?.email ?? "", phone]} />
        <hr className={RULE_FLUSH} />
        <ReviewBlock
          header="We’ll text service updates to"
          lines={[
            <p key="sms" className="mb-0 mt-1 leading-[1.625]">
              {customer?.serviceUpdates || customer?.promoOffers ? phone : "Not opted in"}
              <br />
            </p>,
          ]}
        />
      </div>
    </div>
  );
}
