import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
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

  private answers: string[] = [];

  getQuestions(): Question[] {
    return this.questions;
  }

  saveAnswer(house: string) {
    this.answers.push(house);
  }

  getResult(): string {
    const counts: { [key: string]: number } = {};
    this.answers.forEach(house => counts[house] = (counts[house] || 0) + 1);
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  }

  resetQuiz() {
    this.answers = [];
  }
}
