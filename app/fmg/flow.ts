// Step number and progress bar position of each funnel page, as on
// safelite.com/fmg (the bar fills a little more on each page).
export const FUNNEL_STEPS = ["Vehicle", "Quote", "Schedule", "Review"] as const;

export const FUNNEL_PAGES: Record<string, { step: 1 | 2 | 3 | 4; progress: number }> = {
  "/fmg/vehicle": { step: 1, progress: 5 },
  "/fmg/vehicle-damage": { step: 1, progress: 9 },
  "/fmg/estimate": { step: 1, progress: 12 },
  "/fmg/vin-lookup": { step: 1, progress: 15 },
  "/fmg/license-plate-lookup": { step: 1, progress: 20 },
  "/fmg/service-zip": { step: 1, progress: 20 },
  "/fmg/part-questions": { step: 1, progress: 15 },
  "/fmg/quote": { step: 2, progress: 60 },
  "/fmg/scheduling": { step: 3, progress: 76 },
  "/fmg/mobile-details": { step: 3, progress: 76 },
  "/fmg/customer-details": { step: 3, progress: 84 },
  "/fmg/payment-method": { step: 4, progress: 92 },
  "/fmg/confirmation": { step: 4, progress: 100 },
};

export function funnelPage(pathname: string) {
  return FUNNEL_PAGES[pathname.replace(/\/$/, "")] ?? FUNNEL_PAGES["/fmg/vehicle"];
}
