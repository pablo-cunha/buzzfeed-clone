import { Injectable } from '@angular/core';
import { Question } from '../models/question';

// Serviço que fornece perguntas e calcula o resultado.
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  // Array de perguntas do quiz.
  private questions: Question[] = [
  {
    question: 'Qual dessas qualidades você mais valoriza?',
    options: [
      { text: 'Coragem', house: 'Grifinória' },
      { text: 'Inteligência', house: 'Corvinal' },
      { text: 'Lealdade', house: 'Lufa-Lufa' },
      { text: 'Ambição', house: 'Sonserina' }
    ]
  },
  {
    question: 'Diante de um desafio difícil, o que você faz?',
    options: [
      { text: 'Enfrento sem hesitar', house: 'Grifinória' },
      { text: 'Planejo cada passo', house: 'Corvinal' },
      { text: 'Peço ajuda e coopero', house: 'Lufa-Lufa' },
      { text: 'Uso o desafio a meu favor', house: 'Sonserina' }
    ]
  },
  {
    question: 'Qual dessas matérias de Hogwarts mais te atrai?',
    options: [
      { text: 'Defesa Contra as Artes das Trevas', house: 'Grifinória' },
      { text: 'Aritmancia', house: 'Corvinal' },
      { text: 'Trato das Criaturas Mágicas', house: 'Lufa-Lufa' },
      { text: 'Poções', house: 'Sonserina' }
    ]
  },
  {
    question: 'Como seus amigos te descrevem?',
    options: [
      { text: 'Destemido(a) e leal', house: 'Grifinória' },
      { text: 'Inteligente e criativo(a)', house: 'Corvinal' },
      { text: 'Gentil e confiável', house: 'Lufa-Lufa' },
      { text: 'Determinado(a) e astuto(a)', house: 'Sonserina' }
    ]
  },
  {
    question: 'O que você mais valoriza em um colega de equipe?',
    options: [
      { text: 'Coragem para enfrentar tudo', house: 'Grifinória' },
      { text: 'Capacidade de pensar rápido', house: 'Corvinal' },
      { text: 'Companheirismo e dedicação', house: 'Lufa-Lufa' },
      { text: 'Foco nos resultados', house: 'Sonserina' }
    ]
  }
];

  // Array de respostas fornecidas pelo usuário.
  private answers: string[] = [];

  // Retorna lista de questões.
  getQuestions(): Question[] {
    return this.questions;
  }

  // Armazena resposta do usuário.
  saveAnswer(house: string) {
    this.answers.push(house);
  }

  // Calcula e retorna a casa do usuário (a mais selecionada pelas respostas).
  getResult(): string {
    const counts: { [key: string]: number } = {};
    this.answers.forEach(house => counts[house] = (counts[house] || 0) + 1);
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  }

  // Reseta o quiz, zerando as respostas do usuário.
  resetQuiz() {
    this.answers = [];
  }
}
