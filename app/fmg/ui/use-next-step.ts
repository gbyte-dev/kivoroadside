"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Shows the Continue spinner briefly, then opens the next funnel page
export function useNextStep() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const go = (href: string) => {
    setLoading(true);
    window.setTimeout(() => router.push(href), 400);
  };
  return { loading, setLoading, go };
}
