import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionsComponent } from './questions.component';
import { DataService } from '../../services/data.service';
import { QuestionDirective } from '../../directives/question.directive';
import { ProgressComponent } from '../progress/progress.component';
import { NgTemplateOutlet } from '@angular/common';
import { of } from 'rxjs';
import { Question } from '../../models/question.model';

describe('QuestionsComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    const dataServiceMock = {
      getQuizz: jest.fn().mockReturnValue(() => of({ questions: [{ id: 1, text: 'Sample Question' }] })),
      getStep: jest.fn().mockReturnValue(() => of(0)),
      getTestFinished: jest.fn().mockReturnValue(() => of(false)) // Mocking getTestFinished
    };

    await TestBed.configureTestingModule({
      imports: [NgTemplateOutlet, QuestionDirective, ProgressComponent, QuestionsComponent],
      providers: [{ provide: DataService, useValue: dataServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create the questions component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize question from dataService', () => {
    expect(dataService.getQuizz).toHaveBeenCalled();
    expect(dataService.getStep).toHaveBeenCalled();
    
  });
});
