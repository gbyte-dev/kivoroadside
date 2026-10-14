// Appointment availability for the scheduling page. safelite.com reads it
// from its scheduling service for a booking session; here it is generated
// locally, the same every time for a given ZIP, shop and day: no service on
// Sundays, mobile visits from two days out, shops from tomorrow, and some
// days already full.

export type Slot = { id: string; label: string; premium?: boolean; group: "dropoff" | "morning" | "afternoon" | "mobile" };

const DAY_MS = 86_400_000;

export const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * DAY_MS);
export const dateKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
export const parseKey = (key: string) => {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
};

function seeded(key: string) {
  let hash = 2166136261;
  for (const char of key) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
  return ((hash >>> 0) % 1000) / 1000;
}

// The days the date strip offers: two weeks from today
export const scheduleDays = (today = startOfDay(new Date())) => Array.from({ length: 14 }, (_, i) => addDays(today, i));

export function mobileSlots(zip: string, day: Date, today = startOfDay(new Date())): Slot[] {
  const offset = Math.round((day.getTime() - today.getTime()) / DAY_MS);
  if (offset < 2 || day.getDay() === 0) return [];
  const key = `${zip}-${dateKey(day)}`;
  const roll = seeded(key);
  if (roll < 0.12) return [];
  const slots: Slot[] = [];
  // Some days the morning is already booked
  if (roll >= 0.3) {
    slots.push({ id: `${key}-AM-PREMIUM`, label: "First stop of the day", premium: true, group: "mobile" });
    slots.push({ id: `${key}-AM`, label: "8:00 am - 12:00 pm arrival", group: "mobile" });
  }
  slots.push({ id: `${key}-PM`, label: "12:00 pm - 5:00 pm arrival", group: "mobile" });
  return slots;
}

const SHOP_TIMES = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM",
];

export function shopSlots(shopId: string, day: Date, today = startOfDay(new Date())): Slot[] {
  const offset = Math.round((day.getTime() - today.getTime()) / DAY_MS);
  if (offset < 1 || day.getDay() === 0) return [];
  const key = `${shopId}-${dateKey(day)}`;
  const roll = seeded(key);
  if (roll < 0.2) return [];
  const slots: Slot[] = [{ id: `${key}-DROPOFF`, label: "Drop off all day", group: "dropoff" }];
  // A few open times, more on later days
  SHOP_TIMES.forEach((time, index) => {
    if (seeded(`${key}-${time}`) < 0.18 + offset * 0.02) {
      slots.push({ id: `${key}-${index}`, label: time, group: index < 8 ? "morning" : "afternoon" });
    }
  });
  return slots;
}

// "Thurs, Oct 15"
const SHORT_WEEKDAYS = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
export const nextAvailableLabel = (day: Date) =>
  `${SHORT_WEEKDAYS[day.getDay()]}, ${day.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;

// "Thursday, October 15, 2026"
export const longDate = (day: Date) =>
  day.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });

// "8:00 AM — 12:00 PM" for a mobile window, the time itself for a shop slot
export function slotTimeRange(label: string) {
  if (/First stop|8:00 am/i.test(label)) return "8:00 AM — 12:00 PM";
  if (/12:00 pm - 5:00 pm/i.test(label)) return "12:00 PM — 5:00 PM";
  if (/Drop off/i.test(label)) return "Drop off between 7:30 AM and 9:00 AM";
  return label;
}

// "Friday, October 16, 2026 at 8:00 AM — 12:00 PM"
export const appointmentWhen = (appointment: { date: string; slotLabel: string }) =>
  `${longDate(parseKey(appointment.date))} at ${slotTimeRange(appointment.slotLabel)}`;
