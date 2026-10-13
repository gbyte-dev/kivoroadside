import type { ReactNode } from "react";

export { FunnelPage, QuestionColumn, Row } from "./page-layout";

export default function FmgUiLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

