import { NgTemplateOutlet } from '@angular/common';
import { Component, ViewEncapsulation, effect, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Question } from '../../models/question.model';
import { QuestionDirective } from '../../directives/question.directive';
import { ProgressComponent } from '../progress/progress.component';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NgTemplateOutlet, QuestionDirective, ProgressComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class QuestionsComponent {
  dataService = inject(DataService);

  question: Question = {} as Question;

  constructor() {
    effect(() => {
      const quizz = this.dataService.getQuizz()();
      const step = this.dataService.getStep()();
      this.question = quizz.questions ? quizz.questions[step] : {} as Question;
    });
  }
}
