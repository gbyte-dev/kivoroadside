"use client";

import Link from "next/link";
import { useState } from "react";

export interface InnerNavTab {
  label: string;
  href: string;
  active: boolean;
}

export default function HelpCenterInnerNav({ tabs }: { tabs: InnerNavTab[] }) {
  return (
    <nav className="mx-auto -mt-[10px] mb-5 max-w-[510px] px-[15px] md:max-w-[750px]">
      <ul className="m-0 flex list-none justify-between overflow-x-auto border-b border-[#cacbcc] p-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:justify-start md:overflow-visible md:pb-[10px]">
        {tabs.map((tab, idx) => (
          <TabItem key={tab.label} tab={tab} isFirst={idx === 0} />
        ))}
      </ul>
    </nav>
  );
}

function TabItem({ tab, isFirst }: { tab: InnerNavTab; isFirst: boolean }) {
  const [hovered, setHovered] = useState(false);

  // Active tab is Safelite Logo Red (#db0020). Inactive is #525656. Hover is Safelite Blue (#0070d1).
  const textColor = tab.active ? "#db0020" : hovered ? "#0070d1" : "#525656";

  return (
    <li
      className={`shrink-0 text-[13px] uppercase tracking-[0.75px] md:text-[14px] ${
        !isFirst ? "ml-[15px] md:ml-[50px]" : ""
      }`}
    >
      <Link
        href={tab.href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          color: textColor,
          textDecoration: "none",
        }}
        className={`relative inline-block pb-[10px] font-medium no-underline transition-colors ${
          tab.active
            ? "after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[4px] after:bg-[#0070d1]"
            : ""
        }`}
      >
        {tab.label}
      </Link>
    </li>
  );
}
