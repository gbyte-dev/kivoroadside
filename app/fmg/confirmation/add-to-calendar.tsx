"use client";

import { useState } from "react";
import Image from "next/image";
import { cx } from "@/app/components/services/class-names";
import Modal from "../ui/modal";
import { SEMIBOLD } from "../ui/styles";

export type CalendarEvent = {
  subject: string;
  body: string;
  location: string;
  start: Date;
  end: Date;
  uid: string;
};

const CALENDARS = [
  { name: "iCal", width: 17 },
  { name: "Google", width: 20 },
  { name: "Outlook", width: 21 },
  { name: "Outlook.com", width: 22 },
  { name: "Yahoo", width: 22 },
] as const;

const pad = (value: number) => String(value).padStart(2, "0");
// "20261015T083000" in local time, as the reference writes calendar dates
const compact = (date: Date) =>
  `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}00`;
const dashed = (date: Date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:00`;

function icsFile(event: CalendarEvent) {
  const clean = (text: string) => text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `DTSTAMP:${compact(new Date())}`,
    `UID:${event.uid}@safelite.com`,
    "PRODID:noreply@safelite.com",
    "X-MICROSOFT-CDO-BUSYSTATUS:BUSY",
    `DTSTART:${compact(event.start)}`,
    `DTEND:${compact(event.end)}`,
    `SUMMARY:${clean(event.subject)}`,
    `LOCATION:${clean(event.location)}`,
    `DESCRIPTION:${clean(event.body)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

function open(name: (typeof CALENDARS)[number]["name"], event: CalendarEvent) {
  const e = encodeURIComponent;
  if (name === "iCal" || name === "Outlook") {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([icsFile(event)], { type: "text/calendar" }));
    link.download = "SafeliteAppointment.ics";
    link.click();
    URL.revokeObjectURL(link.href);
    return;
  }
  const minutes = Math.round((event.end.getTime() - event.start.getTime()) / 60000);
  const url =
    name === "Google"
      ? `https://www.google.com/calendar/render?action=TEMPLATE&text=${e(event.subject)}&dates=${e(compact(event.start))}/${e(
          compact(event.end),
        )}&details=${e(event.body)}&location=${e(event.location)}&sf=true&output=xml`
      : name === "Outlook.com"
        ? `https://outlook.office.com/calendar/deeplink/compose?path=/calendar/action/compose&rru=addevent&startdt=${e(
            dashed(event.start),
          )}&enddt=${e(dashed(event.end))}&subject=${e(event.subject)}&body=${e(event.body)}&location=${e(event.location)}`
        : `https://calendar.yahoo.com/?v=60&TITLE=${e(event.subject)}&DESC=${e(event.body)}&ST=${e(compact(event.start))}&DUR=${pad(
            Math.floor(minutes / 60),
          )}${pad(minutes % 60)}&in_loc=${e(event.location)}`;
  window.open(url);
}

// "Add to calendar" under the appointment time; the dialog offers iCal,
// Google, Outlook, Outlook.com and Yahoo
export default function AddToCalendar({ event }: { event: CalendarEvent }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative mx-auto table">
      <div className="py-4 text-center">
        <button type="button" onClick={() => setShow(true)} className="border-0 bg-white">
          <span className="cursor-pointer">
            <Image src="/image/fmg/ui/add-to-calendar.svg" alt="" width={20} height={20} unoptimized className="inline w-5" />
            <span className="ml-[7px] align-middle font-semibold text-[#1574a1] underline">Add to calendar</span>
          </span>
        </button>
      </div>
      <Modal open={show} onClose={() => setShow(false)} label="Add to Calendar" size="medium">
        <div className="mt-8 flex flex-col px-6 pb-6 pt-4">
          <p className="m-0 text-center text-[20px] leading-8 text-black">Add to Calendar</p>
          <div className="mt-1">
            {CALENDARS.map((calendar) => (
              <button
                key={calendar.name}
                type="button"
                aria-label={calendar.name}
                onClick={() => open(calendar.name, event)}
                className={cx(
                  SEMIBOLD,
                  "mb-2 flex w-full flex-col justify-center rounded-full border border-[#8e9292] bg-white px-4 py-3 text-[#4d5151] shadow-[0_1px_5px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_0_4px_#9fcee6] focus-visible:shadow-[0_0_0_2.5px_#0070d1] focus-visible:outline-none",
                )}
              >
                <span className="relative m-0 text-center">
                  <Image
                    src={`/image/fmg/calendar/${calendar.name}.svg`}
                    alt=""
                    width={calendar.width}
                    height={20}
                    unoptimized
                    className="inline"
                  />
                  <span className="ml-[5px] px-2 py-0.5">{calendar.name}</span>
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setShow(false)}
            className={cx(
              SEMIBOLD,
              "mt-4 flex h-12 w-full items-center justify-center rounded-full bg-[#db0020] px-4 py-3 text-white focus-visible:shadow-[0_0_0_3px_#fff,0_0_0_5.5px_#db0020] focus-visible:outline-none",
            )}
          >
            Add to Calendar
          </button>
        </div>
      </Modal>
    </div>
  );
}
