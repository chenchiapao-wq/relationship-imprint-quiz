import { quizQuestions } from "../data/quiz";
import type {
  DimensionScores,
  QuizAnswer,
  QuizResult,
  TypeScores
} from "../types";

const emptyTypeScores = (): TypeScores => ({
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
  F: 0,
  G: 0,
  H: 0
});

const emptyDimensionScores = (): DimensionScores => ({
  safety: 0,
  emotion: 0,
  selfWorth: 0,
  repetition: 0
});

export function calculateResult(answers: QuizAnswer[]): QuizResult | null {
  if (answers.length !== quizQuestions.length) {
    return null;
  }

  const typeScores = emptyTypeScores();
  const dimensionScores = emptyDimensionScores();

  for (const answer of answers) {
    const question = quizQuestions.find((item) => item.id === answer.questionId);
    const option = question?.options.find((item) => item.id === answer.optionId);

    if (!question || !option) {
      return null;
    }

    Object.entries(option.typeScores).forEach(([key, value]) => {
      typeScores[key as keyof TypeScores] += value ?? 0;
    });

    Object.entries(option.dimensionScores).forEach(([key, value]) => {
      dimensionScores[key as keyof DimensionScores] += value ?? 0;
    });
  }

  const sortedTypes = Object.entries(typeScores)
    .map(([code, score]) => ({ code: code as keyof TypeScores, score }))
    .sort((a, b) => b.score - a.score);

  const sortedDimensions = Object.entries(dimensionScores)
    .map(([key, score]) => ({ key: key as keyof DimensionScores, score }))
    .sort((a, b) => b.score - a.score);

  return {
    mainType: sortedTypes[0],
    secondaryTypes: [sortedTypes[1], sortedTypes[2]],
    mainDimension: sortedDimensions[0],
    isMixedType: sortedTypes[0].score - sortedTypes[1].score <= 2,
    allTypeScores: typeScores,
    allDimensionScores: dimensionScores
  };
}
