import type { ReactNode } from "react";
import { cx } from "@/app/components/services/class-names";

type SubHeaderProps = {
  title: ReactNode;
  // Smaller copy under the title (14px on phones, 16px from 768px)
  subText?: ReactNode;
  className?: string;
  titleClassName?: string;
};

// Page title of a funnel step: a 20px black heading with optional copy
export default function SubHeader({ title, subText, className, titleClassName }: SubHeaderProps) {
  return (
    <div className={className}>
      <div className="flex items-center overflow-hidden">
        <h5 className={cx("mb-0 text-[20px] font-normal leading-8 text-black", titleClassName)}>
          <span>{title}</span>
        </h5>
      </div>
      {subText && (
        <div className="mx-0 mt-1 flex overflow-hidden">
          <div className="m-0 text-[14px] leading-[1.7] min-[768px]:text-base">{subText}</div>
        </div>
      )}
    </div>
  );
}
