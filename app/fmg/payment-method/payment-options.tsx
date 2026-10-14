import Image from "next/image";
import { cx } from "@/app/components/services/class-names";
import type { PaymentMethod } from "../fmg-state";
import { SEMIBOLD } from "../ui/styles";

type Option = { value: PaymentMethod; label: string; image?: { src: string; width: number; height: number } };

const OPTIONS: Option[] = [
  { value: "PayNow", label: "Pay now", image: { src: "/image/fmg/icons/credit-paypal.svg", width: 81, height: 24 } },
  {
    value: "Afterpay",
    label: "Pay in 4 installments",
    image: { src: "/image/fmg/icons/cashappafterpay_logo_black.svg", width: 90, height: 23 },
  },
  { value: "Insurance", label: "Pay with insurance" },
  { value: "Later", label: "Pay at my appointment" },
];

type PaymentOptionsProps = {
  value: PaymentMethod;
  onChange: (value: PaymentMethod) => void;
  // Already paying with insurance: that choice is left out
  insurance: boolean;
};

// "Choose a payment option:" pills, the label on the left and any logo on
// the right
export default function PaymentOptions({ value, onChange, insurance }: PaymentOptionsProps) {
  const options = insurance ? OPTIONS.filter((option) => option.value !== "Insurance") : OPTIONS;
  return (
    <div className={cx(SEMIBOLD, "text-black")}>
      <div className="mb-2 mt-4">
        <span className="w-full text-left font-semibold leading-6 text-black">Choose a payment option:</span>
      </div>
      <div className="flex w-full justify-center">
        <fieldset className="w-full" role="radiogroup" aria-required="true">
          <legend className="sr-only">Choose a payment option: Select an option below.</legend>
          <div>
            {options.map((option) => {
              const id = `payment-method-${option.value}`;
              const checked = value === option.value;
              return (
                <div key={option.value} className="w-full">
                  <label
                    htmlFor={id}
                    className={cx(
                      "relative mb-2 flex w-full cursor-pointer flex-col rounded-lg leading-6",
                      !checked && "hover:z-[5] hover:rounded-full hover:shadow-[0_0_0_4px_#9fcee6]",
                    )}
                  >
                    <input
                      id={id}
                      type="radio"
                      name="payment-method"
                      value={option.value}
                      checked={checked}
                      onChange={() => onChange(option.value)}
                      className="peer sr-only"
                    />
                    <div
                      className={cx(
                        "relative flex w-full flex-row rounded-full border border-[#8e9292] px-4 py-3 shadow-[0_1px_5px_0_rgba(0,0,0,0.2)] transition-all duration-150 ease-linear peer-focus:shadow-[0_0_0_2.5px_#0070d1]!",
                        checked ? "bg-[#e4f1f7] font-medium text-black shadow-[0_0_0_1px_#0070d1]!" : "bg-white text-[#4d5151]",
                      )}
                    >
                      {option.image && (
                        <Image
                          src={option.image.src}
                          alt={option.label}
                          width={option.image.width}
                          height={option.image.height}
                          unoptimized
                          className="order-3 ml-auto"
                        />
                      )}
                      <div className="order-2">
                        <p className="m-0 leading-[1.625]">
                          <span>
                            <span className="leading-6">{option.label}</span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              );
            })}
          </div>
        </fieldset>
      </div>
    </div>
  );
}
