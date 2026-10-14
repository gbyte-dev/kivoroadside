"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cx } from "@/app/components/services/class-names";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  // Accessible name of the dialog
  label: string;
  children: ReactNode;
  // Width from 768px: "half" is 50% of the page up to 600px (the quote and
  // save-progress dialogs), "medium" a fixed 500px
  size?: "half" | "medium";
  className?: string;
};

// The reference's ".modal-component": a white dialog pinned 8px from the top
// over a 40% black backdrop (covering the header too), closed with the X,
// the backdrop or Escape.
export default function Modal({ open, onClose, label, children, size = "half", className }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 z-[1050] bg-black/40" aria-hidden="true" />
      <div
        className="fixed inset-0 z-[1055] overflow-y-auto"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={label}
          tabIndex={-1}
          className={cx(
            "relative mx-2 mt-2 flex max-h-[calc(100dvh-1rem)] flex-col overflow-hidden rounded-lg border border-black/[0.175] bg-white outline-none min-[768px]:mx-auto",
            size === "half" ? "min-[768px]:w-1/2 min-[768px]:max-w-[600px]" : "min-[768px]:w-[500px]",
            className,
          )}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-2 top-[21px] z-[1] size-8 rounded bg-[url(/image/fmg/ui/modal-close.svg)] bg-[length:1rem] bg-center bg-no-repeat focus-visible:shadow-[0_0_0_0.25rem_rgba(0,112,209,0.25)] focus-visible:outline-none"
          />
          {children}
        </div>
      </div>
    </>
  );
}
