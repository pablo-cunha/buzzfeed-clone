export interface Option {
  text: string;
  house: string;
}

export interface Question {
  question: string;
  options: Option[];
}
