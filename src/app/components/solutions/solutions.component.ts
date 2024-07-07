import { Component, effect, inject, signal } from '@angular/core';
import { SolutionComponent } from './solution/solution.component';
import { DataService } from '../../services/data.service';
import { Question } from '../../models/question.model';


export enum responses {
  'A', 'B', 'C', 'D'
}

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [SolutionComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {

  dataService = inject(DataService);
  data = this.dataService.getData();
  quizz = this.dataService.getQuizz();

  totalCorrect = 0;

  correctAnswer = -1;

  answerSubmitted = false;

  responsesEnum = responses;

  question: Question = {} as Question;

  answerSelected = signal(-1);

  constructor() {
    effect(() => {
      this.question = this.quizz().questions ? this.quizz().questions[this.dataService.getStep()()] : {} as Question;
      this.correctAnswer = this.question.options?.indexOf(this.question.answer);
    })
  }

  startQuizz(idx: number): void {
    this.dataService.setQuizz(idx);
  }

  nextQuestion(): void {
    if(this.dataService.getStep()() <= 8) {
      this.dataService.addStep();
      this.answerSelected.set(-1);
      this.answerSubmitted = false;
    } else {
      this.dataService.setTestFinished();
    }

  }

  submitAnswer(): void {

    this.answerSubmitted = true;
    if(this.correctAnswer === this.answerSelected()) {
      this.totalCorrect++;
    }
  }

  solutionVariant(idx: number): 'none' | 'correct' | 'incorrect' {
    let variant: 'none' | 'correct' | 'incorrect' = 'none';

    if(this.answerSubmitted && idx === this.correctAnswer) {
      variant = 'correct';
    }

    if(this.answerSubmitted && idx !== this.correctAnswer && idx === this.answerSelected()) {
      variant = 'incorrect';
    }
    return variant;
  }

  onClickAnswer(idx: number): void {
    this.answerSelected.set(idx !== this.answerSelected()? idx : -1);
  }

  playAgain(): void {
    this.answerSelected.set(-1);
    this.answerSubmitted = false;
    this.dataService.initializeData();
    this.totalCorrect = 0;
  }
}
