export type WholesaleInfoIconId = "availability" | "warehouse" | "restocking";

export function WholesaleInfoIcon({ id }: { id: WholesaleInfoIconId }) {
  return (
    <div className="wholesale-info-icon" aria-hidden="true">
      {id === "availability" && (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="10" y="12" width="28" height="26" rx="2" />
          <path d="M10 20h28M18 8v8M30 8v8" />
          <path d="M16 28h6M16 32h10" />
        </svg>
      )}
      {id === "warehouse" && (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 34h32" />
          <path d="M12 34V18l12-8 12 8v16" />
          <path d="M20 34v-10h8v10" />
          <path d="M12 22h24" />
        </svg>
      )}
      {id === "restocking" && (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 30h36l-4-12H10L6 30z" />
          <path d="M14 30V22M22 30V22M30 30V22" />
          <path d="M4 34h40" />
          <path d="M36 18l4-6M38 8v6" />
        </svg>
      )}
    </div>
  );
}
