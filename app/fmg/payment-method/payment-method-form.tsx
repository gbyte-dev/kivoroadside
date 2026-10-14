"use client";

import { useState } from "react";
import { cx } from "@/app/components/services/class-names";
import { useFmg, useFmgGuard, type FmgState, type PaymentMethod, type Vaps } from "../fmg-state";
import { buildCart, packageLevel, packageVaps } from "../pricing";
import InfoModals from "../quote/info-modals";
import PromoModal from "../quote/promo-modal";
import { FunnelPage, QuestionColumn, Row } from "../ui/layout";
import NavBar from "../ui/nav-bar";
import { SEMIBOLD } from "../ui/styles";
import SubHeader from "../ui/sub-header";
import { useNextStep } from "../ui/use-next-step";
import AfterpayBreakout from "./afterpay-breakout";
import Cart from "./cart";
import PaymentOptions from "./payment-options";
import ReviewDropdown, { RULE_FLUSH } from "./review-dropdown";

const hasCustomer = (state: FmgState) => Boolean(state.appointment && state.customer);

// "SG" plus eight digits, made up here: nothing is booked on safelite.com
const confirmationNumber = () => `SG${String(Math.floor(Math.random() * 1e8)).padStart(8, "0")}`;

// Step 4: review the appointment and the order, pick how to pay, submit.
// The order stays in this browser; no payment is taken.
export default function PaymentMethodForm() {
  const allowed = useFmgGuard(hasCustomer);
  const { state, update } = useFmg();
  const { loading, go } = useNextStep();
  const [method, setMethod] = useState<PaymentMethod>(state.paymentMethod ?? "Later");
  const [promoOpen, setPromoOpen] = useState(false);
  const [afterpayInfo, setAfterpayInfo] = useState(false);

  if (!allowed || !state.vehicle) return null;

  const insurance = state.payment === "Insurance";
  const cart = buildCart(state);
  // Paying on one's own with something to pay: the reference offers to pay now
  const offerPayment = !insurance && cart.total > 0;

  const removeVap = (vap: keyof Vaps) => {
    const current = state.vaps ?? packageVaps(state.servicePackage);
    const vaps = { ...current, [vap]: false };
    update({ vaps, servicePackage: packageLevel(vaps) });
  };

  const onSubmit = () => {
    if (offerPayment && method === "Insurance") {
      // The reference moves on to the insurance questions; here the order
      // switches to insurance and the review updates
      update({ payment: "Insurance", paymentMethod: undefined });
      setMethod("Later");
      return;
    }
    update({
      paymentMethod: offerPayment ? method : "Later",
      confirmation: { number: confirmationNumber(), submittedAt: new Date().toISOString() },
    });
    go("/fmg/confirmation");
  };

  return (
    // Every span on the reference review page is set in the semibold face
    <FunnelPage className="[&_span]:font-[family-name:var(--font-fmg-semibold)]">
      <Row>
        <QuestionColumn>
          <SubHeader
            className="mb-6"
            titleClassName="mb-4"
            title="Review, confirm and submit"
            subText={
              <span>
                <span className={cx(SEMIBOLD, "text-[16px] font-semibold text-black")}>Almost done!</span> To finish
                scheduling, please review your appointment details then choose how you want to pay.
              </span>
            }
          />
          <hr className={RULE_FLUSH} />
          <ReviewDropdown state={state} />
          <hr className={RULE_FLUSH} />
          <Cart
            cart={cart}
            insurance={insurance}
            promoCode={state.promoCode}
            onRemove={removeVap}
            onPromoClick={() => setPromoOpen(true)}
          />
          {offerPayment && <AfterpayBreakout total={cart.total} onLearnMore={() => setAfterpayInfo(true)} />}
          <hr className="my-4 border-0 border-t border-current opacity-25" />
          {offerPayment && <PaymentOptions value={method} onChange={setMethod} insurance={insurance} />}
          <NavBar
            stacked
            className="mt-4"
            onContinue={onSubmit}
            continueLabel={offerPayment && method !== "Later" ? "Continue" : "Submit"}
            backHref="/fmg/customer-details"
            loading={loading}
          />
        </QuestionColumn>
      </Row>
      <PromoModal
        open={promoOpen}
        title="Enter a promo code"
        current={state.promoCode}
        onClose={() => setPromoOpen(false)}
        onApply={(code) => {
          update({ promoCode: code });
          setPromoOpen(false);
        }}
      />
      <InfoModals open={afterpayInfo ? "afterpay" : null} onClose={() => setAfterpayInfo(false)} make={state.vehicle.make} />
    </FunnelPage>
  );
}
