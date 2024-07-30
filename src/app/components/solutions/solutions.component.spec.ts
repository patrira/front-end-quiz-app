import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolutionsComponent } from './solutions.component';
import { SolutionComponent } from './solution/solution.component';
import { DataService } from '../../services/data.service';
import { Question } from '../../models/question.model';
import { of } from 'rxjs';

describe('SolutionsComponent', () => {
  let component: SolutionsComponent;
  let fixture: ComponentFixture<SolutionsComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    const dataServiceMock = {
      getData: jest.fn().mockReturnValue(of({})),
      getQuizz: jest.fn().mockReturnValue(() => ({
        questions: [
          { id: 1, text: 'Sample Question', options: ['A', 'B', 'C', 'D'], answer: 'A' }
        ]
      })),
      getStep: jest.fn().mockReturnValue(() => 0),
      setQuizz: jest.fn(),
      addStep: jest.fn(),
      setTestFinished: jest.fn(),
      initializeData: jest.fn(),
      getTestFinished: jest.fn().mockReturnValue(() => false) // Mocking getTestFinished
    };

    await TestBed.configureTestingModule({
      imports: [SolutionComponent, SolutionsComponent], // Add SolutionsComponent to imports
      providers: [{ provide: DataService, useValue: dataServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionsComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create the solutions component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize question from dataService', () => {
    expect(dataService.getQuizz).toHaveBeenCalled();
    expect(dataService.getStep).toHaveBeenCalled();
    
  });

  it('should start quiz with given index', () => {
    component.startQuizz(1);
    expect(dataService.setQuizz).toHaveBeenCalledWith(1);
  });

  it('should move to next question', () => {
    component.nextQuestion();
    expect(dataService.addStep).toHaveBeenCalled();
    expect(component.answerSelected()).toBe(-1);
    expect(component.answerSubmitted).toBe(false);
  });

  it('should submit answer and update totalCorrect', () => {
    component.answerSelected.set(0);
    component.submitAnswer();
    expect(component.answerSubmitted).toBe(true);
    expect(component.totalCorrect).toBe(1);
  });

  it('should return correct solution variant', () => {
    component.answerSubmitted = true;
    component.correctAnswer = 0;
    component.answerSelected.set(0);
    expect(component.solutionVariant(0)).toBe('correct');
    expect(component.solutionVariant(1)).toBe('none');
  });

  it('should handle answer click', () => {
    component.onClickAnswer(1);
    expect(component.answerSelected()).toBe(1);
    component.onClickAnswer(1);
    expect(component.answerSelected()).toBe(-1);
  });

  it('should reset quiz on play again', () => {
    component.playAgain();
    expect(component.answerSelected()).toBe(-1);
    expect(component.answerSubmitted).toBe(false);
    expect(dataService.initializeData).toHaveBeenCalled();
    expect(component.totalCorrect).toBe(0);
  });
});
