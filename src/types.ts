export type TypeCode = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";

export type DimensionKey = "safety" | "emotion" | "selfWorth" | "repetition";

export type TypeScores = Record<TypeCode, number>;

export type DimensionScores = Record<DimensionKey, number>;

export interface QuizOption {
  id: string;
  label: string;
  text: string;
  typeScores: Partial<TypeScores>;
  dimensionScores: Partial<DimensionScores>;
}

export interface QuizQuestion {
  id: number;
  title: string;
  options: QuizOption[];
}

export interface QuizAnswer {
  questionId: number;
  optionId: string;
}

export interface ScoredType {
  code: TypeCode;
  score: number;
}

export interface ScoredDimension {
  key: DimensionKey;
  score: number;
}

export interface QuizResult {
  mainType: ScoredType;
  secondaryTypes: [ScoredType, ScoredType];
  mainDimension: ScoredDimension;
  isMixedType: boolean;
  allTypeScores: TypeScores;
  allDimensionScores: DimensionScores;
}
