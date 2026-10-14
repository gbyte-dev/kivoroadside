import { lookupPartsOrQuestions, type Part } from "./api";
import type { ChosenPart, FmgState } from "./fmg-state";
import { glassPieces } from "./order";

export const toChosenPart = (piece: { location: string; name: string }, part: Part): ChosenPart => ({
  location: piece.location,
  name: piece.name,
  partNumber: part.partNumber,
  description: part.description,
  requiresRecalibration: part.requiresRecalibration,
});

// Once the service ZIP is known, look up the glass for every damaged piece.
// When the catalog needs answers first (heads-up display, rain sensor...)
// the visitor goes to the part questions; otherwise straight to the quote.
// A failed lookup doesn't block the quote.
export async function findParts(state: FmgState, zip: string): Promise<{ patch: Partial<FmgState>; href: string }> {
  const pieces = glassPieces(state.damage);
  const carId = state.vehicle?.carId;
  const none = { patch: { parts: [], pieceQuestions: [], partAnswers: {} }, href: "/fmg/quote" };
  if (pieces.length === 0 || !carId) return none;
  try {
    const { partsOrQuestions } = await lookupPartsOrQuestions({ carId, zip, vin: state.vin, pieces });
    const parts = partsOrQuestions.flatMap((entry) =>
      entry.parts?.length ? [toChosenPart(entry.glassPiece, entry.parts[0])] : [],
    );
    const pieceQuestions = partsOrQuestions.flatMap((entry) =>
      entry.partQuestions?.length ? [{ ...entry.glassPiece, questions: entry.partQuestions }] : [],
    );
    return {
      patch: { parts, pieceQuestions, partAnswers: {} },
      href: pieceQuestions.length > 0 ? "/fmg/part-questions" : "/fmg/quote",
    };
  } catch {
    return none;
  }
}
