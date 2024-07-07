export type Question = {
  question: string;
  options: string[];
  answer: string;
}

export type Quizz = {
  title: string;
  icon: string;
  color: string;
  questions: Question[];
}
