import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultComponent } from './components/result/result.component';

/*
  Componente principal da aplicação.
  Contêiner para o quiz e o resultado.
*/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, QuizComponent, ResultComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hogwarts-quiz';
}
