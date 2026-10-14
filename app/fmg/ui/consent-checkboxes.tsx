import { cx } from "@/app/components/services/class-names";

type ConsentCheckboxesProps = {
  serviceUpdates: boolean;
  promoOffers: boolean;
  onChange: (patch: { serviceUpdates?: boolean; promoOffers?: boolean }) => void;
  className?: string;
  // Space between the rows (40px on the contact page, 34px in the dialogs)
  spacing?: "page" | "dialog";
};

// "Sign me up for updates..." and "...promotional and product offers." text
// message consent boxes
export default function ConsentCheckboxes({
  serviceUpdates,
  promoOffers,
  onChange,
  className,
  spacing = "dialog",
}: ConsentCheckboxesProps) {
  const boxes = [
    { key: "serviceUpdates", label: "Sign me up for updates about my upcoming service.", checked: serviceUpdates },
    { key: "promoOffers", label: "Sign me up for promotional and product offers.", checked: promoOffers },
  ] as const;
  return (
    <fieldset className={cx("border-0 p-0", spacing === "page" && "flex flex-col gap-2", className)}>
      <legend className="sr-only">Text message updates</legend>
      {boxes.map((box) => (
        <label
          key={box.key}
          className={cx(
            "flex min-h-6 cursor-pointer items-start text-[14px] leading-[1.7]",
            spacing === "page" ? "mb-2" : "py-[5px]",
          )}
        >
          <input
            type="checkbox"
            checked={box.checked}
            onChange={(event) => onChange({ [box.key]: event.target.checked })}
            className="mr-2 mt-[4px] size-4 shrink-0 cursor-pointer appearance-none rounded-[2px] border border-[#8e9292] bg-white bg-center bg-no-repeat checked:border-[#0070d1] checked:bg-[#0070d1] checked:bg-[url(/image/fmg/ui/checkbox-checked.svg)] focus-visible:shadow-[0_0_0_2.5px_#0070d1] focus-visible:outline-none"
          />
          <div>
            <span>{box.label}</span>
          </div>
        </label>
      ))}
    </fieldset>
  );
}
