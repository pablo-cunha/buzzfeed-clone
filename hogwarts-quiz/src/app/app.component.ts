import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  questions = [
    {
      question: 'Qual dessas qualidades você mais valoriza?',
      options: [
        { text: 'Coragem', house: 'Grifinória' },
        { text: 'Inteligência', house: 'Corvinal' },
        { text: 'Lealdade', house: 'Lufa-Lufa' },
        { text: 'Ambição', house: 'Sonserina' },
      ]
    },
    {
      question: 'Qual animal mágico você escolheria como companheiro?',
      options: [
        { text: 'Fênix', house: 'Grifinória' },
        { text: 'Coruja', house: 'Corvinal' },
        { text: 'Texugo', house: 'Lufa-Lufa' },
        { text: 'Serpente', house: 'Sonserina' },
      ]
    },
    {
      question: 'Qual dessas matérias você mais gostaria de estudar?',
      options: [
        { text: 'Defesa Contra as Artes das Trevas', house: 'Grifinória' },
        { text: 'Feitiços', house: 'Corvinal' },
        { text: 'Herbologia', house: 'Lufa-Lufa' },
        { text: 'Poções', house: 'Sonserina' },
      ]
    },
    {
      question: 'Como você age diante de um desafio?',
      options: [
        { text: 'Enfrento de cabeça erguida', house: 'Grifinória' },
        { text: 'Penso em uma estratégia', house: 'Corvinal' },
        { text: 'Peço ajuda a amigos', house: 'Lufa-Lufa' },
        { text: 'Uso isso a meu favor', house: 'Sonserina' },
      ]
    },
    {
      question: 'Qual dessas frases mais combina com você?',
      options: [
        { text: 'Sem coragem, não há vitória.', house: 'Grifinória' },
        { text: 'Conhecimento é poder.', house: 'Corvinal' },
        { text: 'A união faz a força.', house: 'Lufa-Lufa' },
        { text: 'Eu traço meu próprio destino.', house: 'Sonserina' },
      ]
    }
  ];

  currentQuestionIndex = 0;
  answersCount: any = {
    'Grifinória': 0,
    'Corvinal': 0,
    'Lufa-Lufa': 0,
    'Sonserina': 0,
  };
  showResult = false;
  resultHouse = '';

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  answer(house: string) {
    this.answersCount[house]++;
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.questions.length) {
      this.calculateResult();
      this.showResult = true;
    }
  }

  calculateResult() {
    let max = 0;
    for (let house in this.answersCount) {
      if (this.answersCount[house] > max) {
        max = this.answersCount[house];
        this.resultHouse = house;
      }
    }
  }

  restart() {
    this.currentQuestionIndex = 0;
    this.answersCount = {
      'Grifinória': 0,
      'Corvinal': 0,
      'Lufa-Lufa': 0,
      'Sonserina': 0,
    };
    this.showResult = false;
    this.resultHouse = '';
  }
}
