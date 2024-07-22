import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import data from '../../assets/data.json';
import { Quizz } from '../models/question.model';
import { signal, WritableSignal } from '@angular/core';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the initial testFinished value', () => {
    const testFinishedSignal = service.getTestFinished();
    expect(testFinishedSignal()).toBeFalsy();
  });

  it('should toggle the testFinished value', () => {
    service.setTestFinished();
    expect(service.getTestFinished()()).toBeTruthy();
    service.setTestFinished();
    expect(service.getTestFinished()()).toBeFalsy();
  });

  it('should return the quiz data', () => {
    expect(service.getData()).toEqual(data.quizzes);
  });

  it('should return the initial step value', () => {
    const stepSignal = service.getStep();
    expect(stepSignal()).toBe(0);
  });

  it('should increment the step value', () => {
    service.addStep();
    expect(service.getStep()()).toBe(1);
  });

  it('should return the initial quizz value', () => {
    const quizzSignal = service.getQuizz();
    expect(quizzSignal()).toEqual({} as Quizz);
  });

  it('should set the quizz value', () => {
    const quizIndex = 0;
    service.setQuizz(quizIndex);
    expect(service.getQuizz()()).toEqual(data.quizzes[quizIndex]);
  });

  it('should initialize data correctly', () => {
    service.addStep();
    service.setTestFinished();
    service.setQuizz(0);

    service.initializeData();

    expect(service.getStep()()).toBe(0);
    expect(service.getTestFinished()()).toBeFalsy();
    expect(service.getQuizz()()).toEqual({} as Quizz);
  });
});
