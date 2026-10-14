import type { ReactNode } from "react";
import { cx } from "@/app/components/services/class-names";

type SubHeaderProps = {
  title: ReactNode;
  // Smaller copy under the title (14px on phones, 16px from 768px)
  subText?: ReactNode;
  // Title and copy centered (the quote page)
  centered?: boolean;
  className?: string;
  titleClassName?: string;
};

// Page title of a funnel step: a 20px black heading with optional copy
export default function SubHeader({ title, subText, centered = false, className, titleClassName }: SubHeaderProps) {
  return (
    <div className={className}>
      <div className={cx("flex items-center overflow-hidden", centered && "justify-center text-center")}>
        <h5 className={cx("mb-0 text-[20px] font-normal leading-8 text-black", titleClassName)}>
          <span>{title}</span>
        </h5>
      </div>
      {subText && (
        <div className={cx("mt-1 flex overflow-hidden", centered ? "items-center justify-center px-12 min-[768px]:px-3" : "mx-0")}>
          <div className={cx("m-0 text-[14px] leading-[1.7] min-[768px]:text-base", centered && "text-center")}>
            {subText}
          </div>
        </div>
      )}
    </div>
  );
}
