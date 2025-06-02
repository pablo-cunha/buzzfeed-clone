// Modelo que representa uma opção de resposta do quiz, com um texto e uma casa associada.
export interface Option {
  text: string;
  house: string;
}

// Modelo que representa uma questão do quiz.
export interface Question {
  question: string;
  options: Option[];
}
