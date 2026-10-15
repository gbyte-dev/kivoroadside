"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useFmg, useFmgGuard, type FmgState } from "../fmg-state";
import { isRepairOnly } from "../order";
import { buildCart, needsRecalibration } from "../pricing";
import Cart from "../payment-method/cart";
import { parseKey } from "../scheduling/slots";
import { FunnelPage, QuestionColumn, Row } from "../ui/layout";
import { TEXT_LINK } from "../ui/styles";
import AddToCalendar, { type CalendarEvent } from "./add-to-calendar";

const submitted = (state: FmgState) => Boolean(state.confirmation && state.appointment && state.customer);

type Kind = "Mobile" | "Dropoff" | "Inshop";

// "8:30 AM" from a shop slot label, as a time on the appointment day
function at(day: Date, time: string) {
  const match = /^(\d{1,2}):(\d\d)\s*(AM|PM)$/i.exec(time.trim());
  const date = new Date(day);
  if (!match) return date;
  const hours = (Number(match[1]) % 12) + (match[3].toUpperCase() === "PM" ? 12 : 0);
  date.setHours(hours, Number(match[2]), 0, 0);
  return date;
}

// Step 4 done: "We've got you scheduled!" with the day and time, a calendar
// link, where the service happens and the order. Nothing was booked on
// safelite.com; the details stay in this browser.
export default function ConfirmationView() {
  const allowed = useFmgGuard(submitted);
  const { state } = useFmg();
  if (!allowed || !state.appointment || !state.customer || !state.vehicle) return null;

  const appointment = state.appointment;
  const kind: Kind =
    appointment.type === "Mobile" ? "Mobile" : /Drop off/i.test(appointment.slotLabel) ? "Dropoff" : "Inshop";
  const day = parseKey(appointment.date);
  const vehicle = `${state.vehicle.year} ${state.vehicle.make} ${state.vehicle.model}`;
  const repair = isRepairOnly(state.damage);
  const morning = /First stop|8:00 am/i.test(appointment.slotLabel);

  // Street on the first line, then city, state and ZIP
  let addressLines: [string, string];
  if (kind === "Mobile") {
    const address = state.address;
    addressLines = [
      `${address?.street ?? ""}${address?.apt ? `, ${address.apt}` : ""},`,
      `${address?.city ?? ""}, ${state.state ?? ""} ${state.serviceZip ?? ""}`,
    ];
  } else {
    const [street = "", city = "", rest = ""] = appointment.shop?.address.split(", ") ?? [];
    addressLines = [`${street},`, `${city.toUpperCase()}, ${rest}`];
  }
  const address: ReactNode = (
    <strong className="text-black">
      {addressLines[0]}
      <br /> {addressLines[1]}
    </strong>
  );

  const dateText = day.toLocaleDateString("en-us", { weekday: "long", month: "long", day: "numeric" });
  const timeText =
    kind === "Mobile"
      ? `Between ${morning ? "8 AM - 12 PM" : "12 PM - 5 PM"}`
      : kind === "Dropoff"
        ? "Drop off before 9:30 AM"
        : `at ${appointment.slotLabel.trim().toUpperCase()}`;
  const duration = kind === "Dropoff" ? "Duration: All Day" : repair ? "Duration: 30 - 60 minutes" : "Duration: 2 - 3 hours";

  const serviceType = repair ? "repair" : needsRecalibration(state) ? "replacement and recalibration" : "replacement";
  const location = addressLines.join(" ");
  let event: CalendarEvent;
  if (kind === "Mobile") {
    const start = at(day, morning ? "8:00 AM" : "12:00 PM");
    event = {
      subject: `Safelite ${serviceType} appointment`,
      body: "Your safety is our top priority, so we'll let you know who's coming to you and your tech will reach out to let you know when they're on the way.",
      location,
      start,
      end: at(day, morning ? "12:00 PM" : "5:00 PM"),
      uid: state.confirmation!.number,
    };
  } else if (kind === "Dropoff") {
    const start = at(day, "7:30 AM");
    event = {
      subject: "Drop off your vehicle between 7:30 AM - 9:30 AM",
      body: "Drop off your vehicle by 9:30 AM and pick it up later in the day. When you arrive, park in an open space and follow the key drop instructions. We'll text you when your vehicle is ready.",
      location,
      start,
      end: at(day, "9:30 AM"),
      uid: state.confirmation!.number,
    };
  } else {
    const start = at(day, appointment.slotLabel);
    event = {
      subject: `Safelite ${serviceType} appointment`,
      body: `Just a reminder that you're coming to us at ${location}.`,
      location,
      start,
      end: new Date(start.getTime() + (repair ? 60 : 180) * 60000),
      uid: state.confirmation!.number,
    };
  }

  return (
    <FunnelPage>
      <Row>
        <QuestionColumn>
          <div className="flex items-center justify-start pb-2 pt-6">
            <Image
              src="/image/fmg/ui/schedule-checkmark.svg"
              alt=""
              width={21}
              height={20}
              unoptimized
              className="mr-2"
            />
            <span>
              <p className="m-0 inline-block text-[20px] font-normal text-black">We&apos;ve got you scheduled!</p>
            </span>
          </div>
          <div className="pb-[1.5em]">
            <p className="m-0 text-[14px]">
              {`A confirmation email was sent to ${state.customer.email}. To edit your appointment, visit `}
              <a href="https://myaccount.safelite.com/" target="_blank" rel="noreferrer" className={TEXT_LINK}>
                mysafelite.com
              </a>
              .
            </p>
          </div>
          <div className="mb-6 rounded-[5px] px-6 pb-6 pt-4 shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
            <div className="text-center">
              <p className="m-0 text-[20px] font-normal text-black">{dateText}</p>
              <p className="m-0 mt-2 text-[16px] font-medium text-black">{timeText}</p>
            </div>
            <AddToCalendar event={event} />
            <div className="text-center [&_p]:m-0">
              <p>{kind === "Mobile" ? "We're coming to you at" : "You're going to a Safelite shop at"}</p>
              {kind === "Mobile" ? (
                <>
                  <p>{address}</p>
                  <p>
                    <span>to service your&nbsp;{vehicle}</span>
                    <br />
                  </p>
                </>
              ) : (
                <p>
                  {address}
                  <br />
                  to service your&nbsp;{vehicle}
                </p>
              )}
            </div>
            <div className="mt-2 w-full text-center">
              <span>
                <span>{duration}</span>
              </span>
            </div>
          </div>
          <hr className="mb-0 mt-4 border-0 border-t border-current opacity-25" />
          <Cart cart={buildCart(state)} insurance={state.payment === "Insurance"} promoCode={state.promoCode} totalLabel="Amount due" />
          <hr className="mb-6 mt-4 border-0 border-t border-current opacity-25" />
        </QuestionColumn>
      </Row>
    </FunnelPage>
  );
}
