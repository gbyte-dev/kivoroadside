"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { cx } from "@/app/components/services/class-names";
import Modal from "../ui/modal";
import { REGULAR, SEMIBOLD } from "../ui/styles";

export type InfoModalName = "recal" | "frontWiper" | "rearWiper" | "rainRepel" | "afterpay";

const CLOSE_BUTTON = cx(
  SEMIBOLD,
  "flex h-12 w-full items-center justify-center rounded-full border border-[#0070d1] bg-white px-4 py-3 text-[#0070d1] hover:bg-[#e4f1f7] focus-visible:shadow-[0_0_0_3px_#fff,0_0_0_5.5px_#0070d1] focus-visible:outline-none",
);

function InfoLayout({
  title,
  subtitle,
  image,
  children,
  footnote,
  onClose,
}: {
  title: string;
  subtitle?: ReactNode;
  image?: { src: string; width: number; height: number };
  children?: ReactNode;
  footnote?: ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="mt-8 flex flex-col overflow-y-auto px-6 pb-6 pt-4">
      <p className={cx(REGULAR, "m-0 pr-8 text-center text-[20px] font-medium leading-8 text-black min-[768px]:pr-0")}>
        {title}
      </p>
      {subtitle && <p className="mb-0 mt-2 text-center">{subtitle}</p>}
      {image && (
        <Image
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          unoptimized
          className="mx-auto mt-4 h-auto max-w-full rounded-lg"
        />
      )}
      {children && <div className="mt-4 text-left [&_li]:ml-5 [&_li]:list-disc [&_p]:mb-2">{children}</div>}
      <button type="button" onClick={onClose} className={cx(CLOSE_BUTTON, "mt-6")}>
        Close
      </button>
      {footnote && <p className="mb-0 mt-4 text-left text-[13px] leading-[1.625] text-[#525656]">{footnote}</p>}
    </div>
  );
}

const BLADE_POINTS = [
  "Includes six-month guarantee",
  "Superior all-weather performance",
  "Streak-free and silent wipe",
  "Free installation at time of service",
];

// The pop-ups behind the links on the quote page (recalibration, wipers,
// rain repellent, and "Learn more" about paying over time)
export default function InfoModals({
  open,
  onClose,
  make,
}: {
  open: InfoModalName | null;
  onClose: () => void;
  make: string;
}) {
  const content: Record<InfoModalName, { label: string; body: ReactNode }> = {
    recal: {
      label: "Keep your vehicle safe",
      body: (
        <InfoLayout
          title="Keep your vehicle safe"
          image={{ src: "/image/fmg/icons/recalibration-gif_v2.gif", width: 320, height: 180 }}
          footnote="Any modifications to your vehicle from its original specifications may cause your advanced safety systems to not function as intended."
          onClose={onClose}
        >
          <p>
            We noticed that your windshield has a camera connected to it. Removing a front windshield affects this
            forward-facing camera.
          </p>
          <p>
            <strong className={SEMIBOLD}>As required by {make}</strong>, your service appointment includes
            recalibrating this camera so that your vehicle’s advanced safety features – like automatic braking, lane
            assist and forward collision warning – continue to work properly.
          </p>
        </InfoLayout>
      ),
    },
    frontWiper: {
      label: "Protect your investment",
      body: (
        <InfoLayout
          title="Protect your investment"
          subtitle="Our Advanced Beam Blades protect your windshield and come with a six-month guarantee."
          image={{ src: "/image/fmg/icons/wiper.jpg", width: 300, height: 100 }}
          onClose={onClose}
        >
          <ul className="m-0 p-0">
            {BLADE_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </InfoLayout>
      ),
    },
    rearWiper: {
      label: "Protect your investment",
      body: (
        <InfoLayout
          title="Protect your investment"
          subtitle="Our Advanced Beam Blades protect your glass and come with a six-month guarantee."
          image={{ src: "/image/fmg/icons/wiper.jpg", width: 300, height: 100 }}
          onClose={onClose}
        >
          <ul className="m-0 p-0">
            {BLADE_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </InfoLayout>
      ),
    },
    rainRepel: {
      label: "Improve visibility and reduce glare",
      body: (
        <InfoLayout
          title="Improve visibility and reduce glare"
          subtitle="Have your technician treat your windshield with rain repellent"
          image={{ src: "/image/fmg/icons/rain-repel-treatment.jpg", width: 400, height: 225 }}
          onClose={onClose}
        >
          <ul className="m-0 p-0">
            <li>Repels rain for better visibility</li>
            <li>Reduces glare, especially at night</li>
            <li>Clear snow, ice, and dirt more easily</li>
            <li>Treatment lasts up to six months</li>
          </ul>
        </InfoLayout>
      ),
    },
    afterpay: {
      label: "Flexible Ways to Pay",
      body: (
        <InfoLayout
          title="Flexible Ways to Pay"
          onClose={onClose}
          footnote={
            <>
              *Interest rates and eligibility depend on your selected payment partner and credit approval. Terms apply
              – see{" "}
              <a href="https://www.afterpay.com/en-US/installment-agreement" target="_blank" rel="noreferrer" className="text-[#0070d1]">
                Afterpay terms
              </a>
              ,{" "}
              <a href="https://www.apple.com/legal/internet-services/apple-pay-wallet/us/" target="_blank" rel="noreferrer" className="text-[#0070d1]">
                Apple Pay terms
              </a>
              , and{" "}
              <a href="https://www.paypal.com/us/legalhub/paypal/home" target="_blank" rel="noreferrer" className="text-[#0070d1]">
                PayPal terms
              </a>{" "}
              for details.
            </>
          }
        >
          {[
            {
              icon: "/image/fmg/icons/afterpay-paytoday.png",
              title: "Pay Now",
              body: (
                <p>
                  We accept most major credit cards including Visa, Mastercard, American Express, or Discover. Apple Pay
                  and PayPal also accepted.
                </p>
              ),
            },
            {
              icon: "/image/fmg/icons/afterpay-payovertime.png",
              title: "Pay Over Time*",
              body: (
                <>
                  <strong className={SEMIBOLD}>Pay in 4</strong>
                  <p>Use Afterpay, PayPal, or Apple Pay to break your cost into 4 payments.</p>
                  <strong className={SEMIBOLD}>Additional financing</strong>
                  <p>Finance through Afterpay, Apple Pay or PayPal.</p>
                </>
              ),
            },
            {
              icon: "/image/fmg/icons/afterpay-paywithinsurance.png",
              title: "Pay with Insurance",
              body: (
                <>
                  <p>Safelite works with most insurance companies to guide you through submitting your claim.</p>
                  <p>Plus you can use flexible payment options for your deductible.</p>
                </>
              ),
            },
          ].map((section) => (
            <div key={section.title} className="mb-4 flex gap-4">
              <Image src={section.icon} alt="" width={48} height={48} unoptimized className="size-12 shrink-0" />
              <div>
                <p className={cx(SEMIBOLD, "mb-1! font-semibold text-black")}>{section.title}</p>
                <div className="text-[14px]">{section.body}</div>
              </div>
            </div>
          ))}
        </InfoLayout>
      ),
    },
  };

  return (
    <Modal open={open !== null} onClose={onClose} label={open ? content[open].label : ""}>
      {open && content[open].body}
    </Modal>
  );
}
