import { Component, Input, Output, EventEmitter } from '@angular/core';

// Componente que exibe resultado do quiz.
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  // Casa determinada pelo quiz.
  @Input() house = '';

  // Evento iniciado caso o usuário escolha reiniciar o quiz.
  @Output() restartQuiz = new EventEmitter<void>();

  // Inicia o evento para reiniciar o quiz.
  restart() {
    this.restartQuiz.emit();
  }
}
