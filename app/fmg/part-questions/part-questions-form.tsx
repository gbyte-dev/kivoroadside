"use client";

import { useState } from "react";
import type { PartQuestion } from "../api";
import { lookupAnsweredParts } from "../api";
import { useFmg, useFmgGuard, type FmgState, type PieceQuestions } from "../fmg-state";
import { toChosenPart } from "../parts";
import { FunnelPage, QuestionColumn, Row } from "../ui/layout";
import NavBar from "../ui/nav-bar";
import OptionButtons from "../ui/option-buttons";
import QuestionText from "../ui/question-text";
import SaveProgress from "../ui/save-progress";
import SubHeader from "../ui/sub-header";
import { useNextStep } from "../ui/use-next-step";

const hasQuestions = (state: FmgState) => Boolean(state.vehicle && state.serviceZip && state.pieceQuestions?.length);

const answerKey = (piece: PieceQuestions, sequence: number) => `${piece.location}-${piece.name}-${sequence}`;

// The questions answered so far for one piece, plus the one waiting for an
// answer; and the part number the chain ends on, once it does
function questionChain(piece: PieceQuestions, answers: Record<string, string>) {
  const bySequence = new Map(piece.questions.map((question) => [question.questionSequence, question]));
  const chain: PartQuestion[] = [];
  let question = bySequence.get(Math.min(...piece.questions.map((q) => q.questionSequence)));
  while (question && !chain.includes(question)) {
    chain.push(question);
    const answer = question.answers.find((option) => option.answerText === answers[answerKey(piece, question!.questionSequence)]);
    if (!answer) return { chain, result: undefined };
    if (answer.answerResult) return { chain, result: answer.answerResult };
    question = answer.nextQuestionSequence ? bySequence.get(answer.nextQuestionSequence) : undefined;
  }
  return { chain, result: undefined };
}

// "OK. Let's just get some specifics about your vehicle." — the parts
// catalog's questions (heads-up display, rain sensor...) that pick the glass.
export default function PartQuestionsForm() {
  const allowed = useFmgGuard(hasQuestions);
  const { state, update } = useFmg();
  const { loading, setLoading, go } = useNextStep();
  const [missing, setMissing] = useState<string[]>([]);

  if (!allowed) return null;
  const pieces = state.pieceQuestions ?? [];
  const answers = state.partAnswers;

  const onContinue = async () => {
    const chains = pieces.map((piece) => ({ piece, ...questionChain(piece, answers) }));
    const unanswered = chains.filter((entry) => !entry.result).map((entry) => {
      const last = entry.chain[entry.chain.length - 1];
      return answerKey(entry.piece, last.questionSequence);
    });
    if (unanswered.length > 0) return setMissing(unanswered);

    setLoading(true);
    const answered = chains.map(({ piece, result }) => ({ location: piece.location, name: piece.name, result }));
    const found = await lookupAnsweredParts({
      carId: state.vehicle!.carId!,
      zip: state.serviceZip!,
      vin: state.vin,
      pieces: answered,
    }).catch(() => null);
    const answeredParts =
      found?.glassPieceParts.flatMap((entry) => (entry.parts?.length ? [toChosenPart(entry.glassPiece, entry.parts[0])] : [])) ?? [];
    // Keep the parts that needed no questions, replace the rest
    const others = (state.parts ?? []).filter(
      (part) => !pieces.some((piece) => piece.location === part.location && piece.name === part.name),
    );
    update({ parts: [...others, ...answeredParts] });
    go("/fmg/quote");
  };

  return (
    <FunnelPage>
      <Row>
        <QuestionColumn>
          <SubHeader title="OK. Let's just get some specifics about your vehicle." titleClassName="mb-4" />
        </QuestionColumn>
      </Row>
      <Row>
        <QuestionColumn className="flex flex-col">
          <div>
            {pieces.map((piece) =>
              questionChain(piece, answers).chain.map((question) => {
                const key = answerKey(piece, question.questionSequence);
                return (
                  <div key={key}>
                    <QuestionText className="mb-6!">{question.questionText}</QuestionText>
                    <OptionButtons
                      name={key}
                      legend={`${question.questionText} Select an option below.`}
                      options={question.answers.map((answer) => ({ value: answer.answerText, label: answer.answerText }))}
                      value={answers[key]}
                      error={missing.includes(key) ? "Please select an option" : undefined}
                      onChange={(value) => {
                        // Changing an answer drops the answers after it in the chain
                        const next = Object.fromEntries(
                          Object.entries(answers).filter(
                            ([other]) =>
                              !other.startsWith(`${piece.location}-${piece.name}-`) ||
                              Number(other.split("-").pop()) <= question.questionSequence,
                          ),
                        );
                        update({ partAnswers: { ...next, [key]: value } });
                        setMissing((current) => current.filter((item) => item !== key));
                      }}
                    />
                  </div>
                );
              }),
            )}
          </div>
          <NavBar onContinue={onContinue} backHref="/fmg/service-zip" loading={loading} className="mt-4" />
          <SaveProgress />
        </QuestionColumn>
      </Row>
    </FunnelPage>
  );
}
