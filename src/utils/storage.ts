import type { QuizAnswer, QuizResult } from "../types";

const ANSWERS_KEY = "relationship-imprint-answers";
const RESULT_KEY = "relationship-imprint-result";
const STEP_KEY = "relationship-imprint-step";

export function saveAnswers(answers: QuizAnswer[]) {
  localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
}

export function loadAnswers(): QuizAnswer[] {
  const raw = localStorage.getItem(ANSWERS_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as QuizAnswer[];
  } catch {
    return [];
  }
}

export function saveResult(result: QuizResult) {
  localStorage.setItem(RESULT_KEY, JSON.stringify(result));
}

export function loadResult(): QuizResult | null {
  const raw = localStorage.getItem(RESULT_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as QuizResult;
  } catch {
    return null;
  }
}

export function saveStep(step: number) {
  localStorage.setItem(STEP_KEY, String(step));
}

export function loadStep() {
  const raw = localStorage.getItem(STEP_KEY);
  return raw ? Number(raw) : 0;
}

export function clearQuizStorage() {
  localStorage.removeItem(ANSWERS_KEY);
  localStorage.removeItem(RESULT_KEY);
  localStorage.removeItem(STEP_KEY);
}
