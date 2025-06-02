import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Question } from '../../models/question';
import { ResultComponent } from '../result/result.component';
import { CommonModule } from '@angular/common';

/*
  Componente Quiz, responsável por exibir as perguntas.
*/

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, ResultComponent],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex = 0;
  showResult = false;
  resultHouse = '';

  constructor(private quizService: QuizService) {}

  // Inicializa o componente.
  ngOnInit() {
    this.questions = this.quizService.getQuestions();
  }

  /*
    Processa a resposta do usuário, avança para a próxima pergunta ou exibe resultado final.
    Recebe como parâmetro a casa equivalente à resposta escolhida pelo usuário.
  */
  answer(house: string) {
    this.quizService.saveAnswer(house);
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.questions.length) {
      this.showResult = true;
      this.resultHouse = this.quizService.getResult();
    }
  }

  // Reinicia o quiz.
  restart() {
    this.quizService.resetQuiz();
    this.currentQuestionIndex = 0;
    this.showResult = false;
    this.resultHouse = '';
  }
}
