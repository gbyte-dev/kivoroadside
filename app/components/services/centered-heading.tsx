import type { ReactNode } from "react";

// Centered section title with the short red bar, which stays centered on
// phones too (the reference's ".all-center-red" rule).
export default function CenteredHeading({ children }: { children: ReactNode }) {
  return (
    <>
      <div>
        <h2 className="text-center">{children}</h2>
      </div>
      <div
        aria-hidden="true"
        className="relative mx-auto mb-[30px] flex w-full max-w-[510px] justify-center px-[15px] md:max-w-[1020px]"
      >
        <div className="h-[5px] w-[120px] flex-none bg-[#db0020]" />
      </div>
    </>
  );
}
