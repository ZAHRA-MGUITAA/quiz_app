export type QuestionProp = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
};

export type Quiz = {
  id: string;
  title: string;
  description: string;
};
