"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { cx } from "@/app/components/services/class-names";
import { useFmg, useFmgGuard, vehicleName, type FmgState, type ServicePackage } from "../fmg-state";
import { glassPieces } from "../order";
import { cashPrices, insurancePrices, money, needsRecalibration, oemExtra } from "../pricing";
import ContactModal from "../ui/contact-modal";
import FieldError from "../ui/field-error";
import { FunnelPage } from "../ui/layout";
import NavBar from "../ui/nav-bar";
import SaveProgress from "../ui/save-progress";
import { REGULAR, SEMIBOLD } from "../ui/styles";
import SubHeader from "../ui/sub-header";
import { useNextStep } from "../ui/use-next-step";
import InfoModals, { type InfoModalName } from "./info-modals";
import PackageCard from "./package-card";
import PromoModal from "./promo-modal";

const hasZip = (state: FmgState) => Boolean(state.vehicle && state.serviceZip && state.damage.locations.length > 0);

const LINK = "p-0 text-[#0070d1] underline leading-[1.714]";

// Step 2: the quote. Pay on one's own or with insurance, pick one of three
// service packages, optionally add OEM glass or a promo code.
export default function QuoteForm() {
  const allowed = useFmgGuard(hasZip);
  const { state, update } = useFmg();
  const { loading, go } = useNextStep();
  const [info, setInfo] = useState<InfoModalName | null>(null);
  const [promoOpen, setPromoOpen] = useState(false);
  const [oemOpen, setOemOpen] = useState(false);
  const [error, setError] = useState<string>();

  if (!allowed || !state.vehicle) return null;

  const insurance = (state.payment ?? "Insurance") === "Insurance";
  const repair = state.damage.windshieldDamage === "Repair" && glassPieces(state.damage).length === 0;
  const otherGlass = glassPieces(state.damage).some((piece) => piece.location !== "Windshield");
  const recal = needsRecalibration(state);
  const rear = state.damage.locations.includes("RearWindow");
  const cash = cashPrices(state);
  const covered = insurancePrices(state);

  const link = (name: InfoModalName, text: string) => (
    <a
      href="#!"
      className={LINK}
      onClick={(event) => {
        event.preventDefault();
        setInfo(name);
      }}
    >
      {text}
    </a>
  );
  const common: ReactNode[] = [
    repair ? "Expert windshield repair" : `New replacement ${otherGlass ? "glass" : "windshield"}`,
    repair ? (
      "Exclusive resin sealant"
    ) : recal ? (
      <><span>Expert installation and </span>{link("recal", "recalibration")}</>
    ) : (
      "Expert installation"
    ),
    `Nationwide lifetime ${repair ? "guarantee" : "warranty"}`,
  ];
  const wipers: ReactNode[] = rear
    ? [
        <><span>New </span>{link("frontWiper", "front wiper blades")}</>,
        <><span>New </span>{link("rearWiper", "rear wiper blade")}</>,
      ]
    : [<><span>New </span>{link("frontWiper", "wiper blades")}</>];
  const packages: { value: ServicePackage; title: string; subLabel?: string; bullets: ReactNode[]; footer?: string }[] = [
    {
      value: "TierOne",
      title: "Glass service only",
      bullets: common,
      footer: `New wiper blades are not included with glass service only. ${
        repair
          ? "Because chips can disrupt the glass surface, we recommend new wipers after a repair."
          : "Failure to replace worn wipers may damage your new windshield."
      }`,
    },
    { value: "TierTwo", title: "Standard", subLabel: "MOST POPULAR", bullets: [...common, ...wipers] },
    {
      value: "TierThree",
      title: "Premium",
      bullets: [...common, ...wipers, link("rainRepel", "Rain Repel Treatment")],
    },
  ];

  const onContinue = () => {
    if (!state.servicePackage) return setError("Please make a selection");
    go("/fmg/scheduling");
  };

  const backHref = state.pieceQuestions?.length ? "/fmg/part-questions" : "/fmg/service-zip";

  return (
    <FunnelPage className="relative pb-8">
      <div className="-mx-3 flex flex-wrap justify-center">
        <div className="w-full px-3">
          <div
            role="note"
            className="mb-4 flex w-full items-center justify-start gap-4 rounded-2xl bg-[#f5f5f5] px-5 py-4 text-left min-[768px]:justify-center min-[768px]:text-center"
          >
            <Image
              src="/image/fmg/icons/cost-payment-and-billing.svg"
              alt=""
              width={31}
              height={36}
              unoptimized
              className="h-9 w-[31px] shrink-0"
            />
            <p className="mb-0 text-[14px] leading-[1.5] text-[#525656]">
              <strong className={cx(SEMIBOLD, "text-black")}>Save $25</strong> when you pay on your own today using code{" "}
              <strong className={cx(SEMIBOLD, "text-black")}>SAVENOW2026</strong>. Use your choice of credit card or pay
              in installments.**
            </p>
          </div>
        </div>
      </div>

      <div className="-mx-3 flex flex-wrap justify-center">
        <div className="w-full px-3">
          <SubHeader
            className="mb-6"
            titleClassName="mb-4"
            title={`We've got your ${vehicleName(state.vehicle)} covered!`}
            subText={<span>Now choose your payment and service options.*</span>}
            centered
          />
        </div>
      </div>

      <div className="-mx-3 flex flex-wrap justify-center">
        <div className="w-full px-3 min-[768px]:w-1/2">
          <fieldset className="w-full" role="radiogroup">
            <legend className="sr-only">Select an option below.</legend>
            <div className="flex flex-row p-0">
              {(
                [
                  { value: "Cash", label: "Pay on my own" },
                  { value: "Insurance", label: "Pay with insurance" },
                ] as const
              ).map((option, index) => {
                const checked = (state.payment ?? "Insurance") === option.value;
                return (
                  <div key={option.value} className="min-w-0 flex-1">
                    <label className="flex h-full w-full cursor-pointer flex-col">
                      <input
                        type="radio"
                        name="CashOrInsuranceQuestion"
                        value={option.value}
                        checked={checked}
                        onChange={() => update({ payment: option.value })}
                        className="peer absolute size-0 opacity-0"
                      />
                      <div
                        className={cx(
                          "relative z-[2] flex h-full w-full flex-col justify-center border border-[#06577c] px-1 py-3 transition-all duration-150 ease-linear peer-focus-visible:rounded-lg peer-focus-visible:shadow-[0_0_0_3px_#fff,0_0_0_5.5px_#06577c]",
                          index === 0 ? "rounded-l-lg" : "rounded-r-lg",
                          checked ? "rounded-lg bg-[#0070d1] text-white" : "bg-white text-[#0070d1]",
                          checked && (index === 0 ? "rounded-r-none" : "rounded-l-none"),
                        )}
                      >
                        <span className={cx(SEMIBOLD, "m-0 text-center font-semibold leading-6")}>{option.label}</span>
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>
          </fieldset>
        </div>
      </div>

      <div className="-mx-3 flex flex-wrap justify-center">
        <div className="mb-6 w-full px-3">
          <fieldset className="w-full" role="radiogroup">
            <legend className="sr-only">Select an option below.</legend>
            <div className="mt-4 min-[768px]:mt-0 min-[768px]:flex min-[768px]:justify-center">
              {packages.map((pkg) => (
                <PackageCard
                  key={pkg.value}
                  {...pkg}
                  checked={state.servicePackage === pkg.value}
                  onSelect={() => {
                    update({ servicePackage: pkg.value, vaps: undefined });
                    setError(undefined);
                  }}
                  insurance={insurance}
                  cash={cash[pkg.value]}
                  insurancePrice={covered[pkg.value]}
                />
              ))}
            </div>
          </fieldset>
          <FieldError variant="options" message={error} />
        </div>
      </div>

      <div className="-mx-3 flex flex-wrap justify-center">
        <div className="w-full px-3">
          <div
            role="alert"
            className="flex flex-col items-center justify-center rounded-2xl bg-[#e5f1fa] p-4 min-[768px]:flex-row"
          >
            <div
              className={cx(
                SEMIBOLD,
                "flex w-full justify-center border-b border-black pb-2 text-[20px] leading-8 text-black min-[768px]:w-auto min-[768px]:flex-col min-[768px]:border-b-0 min-[768px]:border-r min-[768px]:pb-0 min-[768px]:pr-4",
              )}
            >
              <span className="mr-1 whitespace-nowrap min-[768px]:mr-0">Fix now.</span>
              <span className="whitespace-nowrap">Pay later.</span>
            </div>
            <div className={cx(REGULAR, "pt-4 text-left text-[#525656] min-[768px]:pl-4 min-[768px]:pt-0")}>
              <span>Manage your spending by paying in 4 interest-free payments with </span>
              <Image
                src="/image/fmg/icons/cashappafterpay_logo_black.svg"
                alt="Afterpay"
                width={90}
                height={23}
                unoptimized
                className="inline -translate-y-[0.1rem] align-middle"
              />
              <strong>.</strong>
              {/* The reference spaces the link with a 4px inline block plus a space */}
              <span className="inline-block w-1" />{" "}
              <a
                href="#"
                className="pb-1 leading-[2] text-[#0070d1] underline"
                onClick={(event) => {
                  event.preventDefault();
                  setInfo("afterpay");
                }}
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="mt-4 flex min-[768px]:justify-center">
            <a
              href="#"
              className="pb-1 text-[14px] leading-[2] text-[#0070d1] underline min-[768px]:text-base"
              onClick={(event) => {
                event.preventDefault();
                setPromoOpen(true);
              }}
            >
              I have a promo code
            </a>
          </div>
          {state.promoCode && (
            <p className="mb-0 mt-2 text-center text-[14px] text-[#0c7e47]">
              Promo code {state.promoCode} applied.{" "}
              <button type="button" className="text-[#0070d1] underline" onClick={() => update({ promoCode: undefined })}>
                Remove
              </button>
            </p>
          )}
        </div>
      </div>

      <div className="-mx-3 flex flex-wrap justify-center">
        <div className="w-full px-3 min-[768px]:w-2/3 min-[1200px]:w-1/2">
          <NavBar onContinue={onContinue} loading={loading} wide className="mb-8 mt-4" />
          {!insurance && !repair && (
            <div className="mb-8 mt-3 border-t border-[gray] py-6 min-[992px]:mx-8">
              <button
                type="button"
                aria-expanded={oemOpen}
                onClick={() => setOemOpen(!oemOpen)}
                className={cx(
                  SEMIBOLD,
                  "flex w-full cursor-pointer items-center justify-start text-[#0070d1] after:relative after:ml-2 after:inline-flex after:size-4 after:bg-[url(/image/fmg/ui/oem-chevron.svg)] after:bg-center after:bg-no-repeat after:transition-all after:duration-500",
                  !oemOpen && "after:rotate-180",
                )}
              >
                Install OEM glass instead
              </button>
              {oemOpen && (
                <div className="mt-2 pt-2">
                  <p>
                    Your quote is for original equipment equivalent (OEE) glass which is made to the same specifications as
                    original equipment manufacturer (OEM) glass, just by different manufacturers.
                  </p>
                  <p>
                    If you prefer OEM glass, we can install it for{" "}
                    <span className={cx(SEMIBOLD, "font-bold text-black")}>{money(oemExtra(state))}</span> more.
                  </p>
                  <label className={cx(SEMIBOLD, "ml-1 mt-3 flex cursor-pointer items-start text-[14px]")}>
                    <input
                      type="checkbox"
                      checked={Boolean(state.oemGlass)}
                      onChange={(event) => update({ oemGlass: event.target.checked })}
                      className="mr-2 mt-[4px] size-4 shrink-0 cursor-pointer appearance-none rounded-[2px] border border-[#8e9292] bg-white bg-center bg-no-repeat checked:border-[#0070d1] checked:bg-[#0070d1] checked:bg-[url(/image/fmg/ui/checkbox-checked.svg)]"
                    />
                    <span className={state.oemGlass ? "font-bold text-black" : undefined}>Install OEM glass</span>
                  </label>
                </div>
              )}
            </div>
          )}
          {/* Without the OEM block the bar sits 8px further down, as on the reference */}
          <SaveProgress className={insurance || repair ? "mt-10!" : undefined} />
          <div className="mt-2 w-full text-left text-[12px] leading-[1.7] min-[768px]:text-center">
            <span>
              *Quote does not include tax, recycling fee, or mobile service fee if applicable, All service options
              include our{" "}
              <a href="/national-lifetime-warranty" target="_blank" className="text-[#0070d1] underline">
                nationwide lifetime warranty
              </a>
              .
            </span>
          </div>
          <div className="mb-6 mt-2 w-full text-left text-[12px] leading-[1.7] min-[768px]:text-center">
            <span>
              **Not valid on insurance claims or commercial/fleet services. Multiple promotional discounts cannot be
              added to one order.
            </span>
          </div>
        </div>
      </div>

      <Link
        href={backHref}
        className={cx(
          SEMIBOLD,
          "absolute bottom-4 left-4 whitespace-nowrap pb-1 text-[14px] font-semibold leading-[26px] text-[#0070d1] no-underline min-[768px]:text-base",
        )}
      >
        Back
      </Link>

      <ContactModal
        open={!state.quoteModalSeen}
        onClose={() => update({ quoteModalSeen: true })}
        title="Your quote is almost ready!"
        intro="Where should we send it?"
        submitLabel="Send"
        defaultMethod="email"
        withTag
        onSkip={() => update({ quoteModalSeen: true })}
        onSubmit={(contact) => update({ contact, quoteModalSeen: true })}
      />
      <InfoModals open={info} onClose={() => setInfo(null)} make={state.vehicle.make} />
      <PromoModal
        open={promoOpen}
        onClose={() => setPromoOpen(false)}
        current={state.promoCode}
        onApply={(code) => {
          update({ promoCode: code, payment: "Cash" });
          setPromoOpen(false);
        }}
      />
    </FunnelPage>
  );
}
