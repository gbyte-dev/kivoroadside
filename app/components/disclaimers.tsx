/*
 * Mirrors safelite.com's "#disclaimer" block. The asterisk links in the hero
 * and the carousel point here. The text uses the browser's "smaller" size
 * (13.33px) on a 25px line, like the reference's <sub> element.
 */

const disclaimers = [
  "*Free mobile services may not be available at all locations or for all vehicles. Parts, labor, and fees still apply.",
  "**Offer valid only for Premium package when scheduling at safelite.com. Not valid on insurance claims or commercial/fleet services.",
  "***Subject to approval. Safelite is not a lender.",
];

export default function Disclaimers() {
  return (
    // .content-container-wide
    <div className="mx-auto w-full max-w-[510px] px-[15px] md:max-w-[1020px]">
      <p id="disclaimer" className="pb-[10px] pt-[26px] text-[#525656]">
        <sub className="static inline-grid align-sub text-[13.3333px] leading-[25px]">
          {disclaimers.map((text) => (
            <span key={text}>{text}</span>
          ))}
        </sub>
      </p>
    </div>
  );
}
