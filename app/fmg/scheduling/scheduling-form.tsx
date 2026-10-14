"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { cx } from "@/app/components/services/class-names";
import { fetchShops, lookupZip, type Shop } from "../api";
import { useFmg, useFmgGuard, type Appointment, type FmgState } from "../fmg-state";
import { isRepairOnly } from "../order";
import FieldError from "../ui/field-error";
import { FunnelPage, QuestionColumn, Row } from "../ui/layout";
import NavBar from "../ui/nav-bar";
import OptionButtons from "../ui/option-buttons";
import QuestionText from "../ui/question-text";
import { REGULAR } from "../ui/styles";
import SubHeader from "../ui/sub-header";
import { useNextStep } from "../ui/use-next-step";
import DateStrip from "./date-strip";
import SlotCard from "./slot-card";
import { dateKey, mobileSlots, nextAvailableLabel, parseKey, scheduleDays, shopSlots, type Slot } from "./slots";

const quoteDone = (state: FmgState) => Boolean(state.vehicle && state.serviceZip && state.servicePackage);

const titleCase = (text: string) => text.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
// 6.0005 -> "6 mi", 10.84 -> "10.8 mi"
const miles = (distance: number) => `${Math.round(distance * 10) / 10} mi`;
const shopAddress = (shop: Shop) =>
  `${shop.address.streetAddress}, ${titleCase(shop.address.city)}, ${shop.address.state} ${shop.address.zipCode}`;

// Step 3: where and when. Mobile or in-shop, a day from the strip, then a
// time slot on the mobile card or one of the nearby shops.
export default function SchedulingForm() {
  const allowed = useFmgGuard(quoteDone);
  const { state, update } = useFmg();
  const { loading, go } = useNextStep();
  const zip = state.serviceZip ?? "";
  const [zipInput, setZipInput] = useState(zip);
  const [zipError, setZipError] = useState<string>();
  const [shops, setShops] = useState<Shop[]>([]);
  const [showAllShops, setShowAllShops] = useState(false);
  const [type, setType] = useState<Appointment["type"] | undefined>(state.appointment?.type);
  const [day, setDay] = useState<string | undefined>(state.appointment?.date);
  const [slot, setSlot] = useState<Appointment | undefined>(state.appointment);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<{ type?: string; slot?: string }>({});
  const [page, setPage] = useState(0);
  const days = useMemo(() => scheduleDays(), []);
  const carId = state.vehicle?.carId;
  const service = isRepairOnly(state.damage) ? "Repair" : "Replace";

  useEffect(() => {
    if (!zip || !carId) return;
    fetchShops(zip, service, carId)
      .then((result) => setShops(result.shopProviders.slice(0, 6)))
      .catch(() => setShops([]));
  }, [zip, carId, service]);

  if (!allowed) return null;

  const visibleShops = showAllShops ? shops : shops.slice(0, 3);
  const slotsFor = (target: "mobile" | Shop, date: Date) =>
    target === "mobile" ? mobileSlots(zip, date) : shopSlots(target.providerNumber, date);
  const available = (date: Date) =>
    type === "Mobile" ? slotsFor("mobile", date).length > 0 : visibleShops.some((shop) => slotsFor(shop, date).length > 0);
  const firstAvailable = (forType: Appointment["type"]) =>
    days.find((date) =>
      forType === "Mobile" ? slotsFor("mobile", date).length > 0 : visibleShops.some((shop) => slotsFor(shop, date).length > 0),
    );
  const selectedDay = day && type ? parseKey(day) : undefined;

  const chooseType = (value: Appointment["type"]) => {
    setType(value);
    setErrors({});
    setSlot(undefined);
    setExpanded({});
    const first = firstAvailable(value);
    setDay(first ? dateKey(first) : undefined);
    if (first) setPage(Math.floor(days.findIndex((date) => dateKey(date) === dateKey(first)) / 5) * 5);
  };

  const chooseSlot = (picked: Slot, shop?: Shop) => {
    if (!type || !day) return;
    setSlot({
      type,
      date: day,
      slot: picked.id,
      slotLabel: picked.label,
      premium: picked.premium,
      shop: shop
        ? {
            id: shop.providerNumber,
            name: titleCase(shop.address.city),
            address: shopAddress(shop),
            phone: shop.phoneNumber,
          }
        : undefined,
    });
    setErrors({});
  };

  const searchZip = async () => {
    if (!/^\d{5}$/.test(zipInput)) return setZipError("Please enter a valid ZIP");
    const result = await lookupZip(zipInput).catch(() => null);
    if (!result?.isValid) return setZipError("Please enter a valid ZIP");
    if (!result.isServiceable) return setZipError("Service not available in your area");
    setZipError(undefined);
    setSlot(undefined);
    update({ serviceZip: zipInput, city: result.city ?? undefined, state: result.state ?? undefined });
  };

  const onContinue = () => {
    if (!type) return setErrors({ type: "Please select an option" });
    if (!slot) return setErrors({ slot: "Please select an appointment timeslot" });
    update({ appointment: slot });
    go(type === "Mobile" ? "/fmg/mobile-details" : "/fmg/customer-details");
  };

  // The first card starts open, the rest closed, until the visitor toggles them
  const isExpanded = (id: string, index: number) => expanded[id] ?? index === 0;

  return (
    <FunnelPage>
      <Row>
        <QuestionColumn>
          <SubHeader
            title="Schedule your appointment"
            subText={
              <span>Estimated service time: {isRepairOnly(state.damage) ? "30-60 minutes" : "2-3 hours"}</span>
            }
          />
          <div className="mt-4">
            <label htmlFor="sz-service-zip" className={cx(REGULAR, "mb-2 flex font-semibold leading-6 text-[#4d5151]")}>
              Service ZIP code
            </label>
            <div className="relative">
              <input
                id="sz-service-zip"
                type="text"
                inputMode="numeric"
                value={zipInput}
                onChange={(event) => setZipInput(event.target.value.replace(/\D/g, "").slice(0, 5))}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    searchZip();
                  }
                }}
                className={cx(
                  REGULAR,
                  "h-12 w-full rounded-full border-0 pl-4 pr-14 text-[#525656] shadow-[0_1px_4px_0_rgba(0,0,0,0.2)] outline outline-1 outline-[#d2d4d4] focus:outline-2 focus:outline-[#0070d1]",
                  zipError && "outline-2 outline-[#db0020]",
                )}
              />
              <button
                type="button"
                aria-label="Search"
                onClick={searchZip}
                className="absolute right-0 top-0 h-12 w-[50px] cursor-pointer rounded-r-full border-0 bg-[#e5f1fa] bg-[url(/image/fmg/ui/scheduling-search.svg)] bg-center bg-no-repeat"
              />
            </div>
            <span
              className={cx(
                "mt-1 flex overflow-hidden text-[14px] text-[#db0020] transition-[max-height] duration-300",
                zipError ? "max-h-[25px]" : "max-h-0",
              )}
            >
              {zipError}
            </span>
          </div>

          <div aria-live="polite">
            <QuestionText bold className="mb-4!">
              Where do you want service?
            </QuestionText>
            <OptionButtons
              name="appointmentTypeQuestion"
              legend="Where do you want service? Select an option below."
              options={[
                { value: "Mobile", label: "We come to you" },
                { value: "Shop", label: "You come to our shop" },
              ]}
              value={type}
              compact
              error={errors.type}
              onChange={(value) => chooseType(value as Appointment["type"])}
            />
          </div>

          {type && (
            <>
              <DateStrip
                days={days}
                start={page}
                onPage={setPage}
                selected={day}
                isAvailable={available}
                onSelect={(key) => {
                  setDay(key);
                  setSlot(undefined);
                }}
              />
              <p className={cx(REGULAR, "mb-0 mt-6 flex items-center gap-2 font-semibold leading-6 text-black")}>
                <Image
                  src={type === "Mobile" ? "/image/fmg/app/van.svg" : "/image/fmg/app/shop.svg"}
                  alt=""
                  width={24}
                  height={24}
                  unoptimized
                  className="size-6 shrink-0"
                />
                {type === "Mobile" ? (
                  <span>
                    We come to you <span className={cx(REGULAR, "font-normal text-[#4d5151]")}>(for free!):</span>
                  </span>
                ) : (
                  <span>Visit us at a shop:</span>
                )}
              </p>
              {selectedDay && type === "Mobile" && (
                <SlotCard
                  className="mt-2"
                  name="mobileTimeSlot"
                  title="At your location"
                  subline={
                    <div className="mt-1 flex items-center gap-2 text-[14px] leading-6">
                      <button
                        type="button"
                        onClick={() => document.getElementById("sz-service-zip")?.focus()}
                        className={cx(REGULAR, "cursor-pointer border-0 bg-transparent p-0 font-semibold text-[#0070d1] underline")}
                      >
                        {zip}
                      </button>
                      <span className="text-[#4d5151]">|</span>
                      <span className="text-[#4d5151]">Enter address on the next page</span>
                    </div>
                  }
                  slots={slotsFor("mobile", selectedDay)}
                  expanded={isExpanded("mobile", 0)}
                  onToggle={() => setExpanded((current) => ({ ...current, mobile: !isExpanded("mobile", 0) }))}
                  selected={slot?.slot}
                  error={Boolean(errors.slot)}
                  nextAvailable={(() => {
                    const next = days.find((date) => date > selectedDay && slotsFor("mobile", date).length > 0);
                    return next ? nextAvailableLabel(next) : undefined;
                  })()}
                  onSelect={(picked) => chooseSlot(picked)}
                />
              )}
              {selectedDay && type === "Shop" && (
                <>
                  {visibleShops.map((shop, index) => {
                    const shopSlotsToday = slotsFor(shop, selectedDay);
                    const next = days.find((date) => date > selectedDay && slotsFor(shop, date).length > 0);
                    return (
                      <SlotCard
                        key={shop.providerNumber}
                        className={index === 0 ? "mt-2" : "mt-4"}
                        name="shopTimeSlot"
                        title={titleCase(shop.address.city)}
                        distance={miles(shop.distanceInMiles)}
                        subline={
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shopAddress(shop))}`}
                            target="_blank"
                            rel="noreferrer"
                            className={cx(
                              REGULAR,
                              "mt-1 inline-block w-fit max-w-full p-0 text-left text-[14px] font-semibold leading-6 text-[#0070d1] underline",
                            )}
                          >
                            {shopAddress(shop)}
                          </a>
                        }
                        slots={shopSlotsToday}
                        expanded={isExpanded(shop.providerNumber, index)}
                        onToggle={() =>
                          setExpanded((current) => ({
                            ...current,
                            [shop.providerNumber]: !isExpanded(shop.providerNumber, index),
                          }))
                        }
                        selected={slot?.slot}
                        error={Boolean(errors.slot)}
                        nextAvailable={next ? nextAvailableLabel(next) : undefined}
                        onSelect={(picked) => chooseSlot(picked, shop)}
                      />
                    );
                  })}
                  {!showAllShops && shops.length > 3 && (
                    <div className="mt-4 flex justify-center">
                      <button
                        type="button"
                        onClick={() => setShowAllShops(true)}
                        className={cx(REGULAR, "flex items-center gap-1 pb-1 font-semibold leading-8 text-[#0070d1] underline")}
                      >
                        View more shops
                        <Image src="/image/fmg/app/chevron-no-background.svg" alt="" width={16} height={16} unoptimized className="size-4 rotate-180" />
                      </button>
                    </div>
                  )}
                </>
              )}
              <FieldError variant="options" message={errors.slot} />
            </>
          )}
          <NavBar onContinue={onContinue} backHref="/fmg/quote" loading={loading} className="mt-4" />
        </QuestionColumn>
      </Row>
    </FunnelPage>
  );
}
