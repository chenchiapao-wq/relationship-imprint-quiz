import { describe, expect, it, vi } from "vitest";
import { quizQuestions } from "../data/quiz";
import { calculateResult } from "../utils/calculateResult";
import type { QuizAnswer } from "../types";

function answersByOptionLetter(letter: string): QuizAnswer[] {
  return quizQuestions.map((question) => ({
    questionId: question.id,
    optionId: `${question.id}${letter}`
  }));
}

describe("calculateResult", () => {
  it("returns null when answers are incomplete", () => {
    expect(calculateResult([])).toBeNull();
    expect(calculateResult(answersByOptionLetter("A").slice(0, 15))).toBeNull();
  });

  it("accumulates scores and returns main, secondary, and dimension rankings", () => {
    const result = calculateResult(answersByOptionLetter("A"));

    expect(result).not.toBeNull();
    expect(result?.mainType.code).toBe("A");
    expect(result?.mainDimension.key).toBe("safety");
    expect(result?.allTypeScores.A).toBeGreaterThan(result?.allTypeScores.B ?? 0);
    expect(result?.secondaryTypes).toHaveLength(2);
  });

  it("detects a mixed type when the top two scores differ by 2 or less", async () => {
    vi.resetModules();
    vi.doMock("../data/quiz", () => ({
      quizQuestions: [
        {
          id: 1,
          title: "Mock question 1",
          options: [
            {
              id: "1A",
              label: "A",
              text: "A leaning",
              typeScores: { A: 3, B: 1 },
              dimensionScores: { safety: 3 }
            }
          ]
        },
        {
          id: 2,
          title: "Mock question 2",
          options: [
            {
              id: "2A",
              label: "A",
              text: "B leaning",
              typeScores: { B: 3, A: 1 },
              dimensionScores: { selfWorth: 2 }
            }
          ]
        }
      ]
    }));

    const { calculateResult: mockedCalculateResult } = await import("../utils/calculateResult");
    const answers: QuizAnswer[] = [
      { questionId: 1, optionId: "1A" },
      { questionId: 2, optionId: "2A" }
    ];

    const result = mockedCalculateResult(answers);
    const difference = Math.abs((result?.mainType.score ?? 0) - (result?.secondaryTypes[0].score ?? 0));

    expect(result).not.toBeNull();
    expect(difference).toBeLessThanOrEqual(2);
    expect(result?.isMixedType).toBe(true);
    vi.doUnmock("../data/quiz");
  });
});
