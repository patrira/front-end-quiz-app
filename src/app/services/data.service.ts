import { Injectable, WritableSignal, signal } from '@angular/core';
import data from '../../assets/data.json';
import { Quizz } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: Quizz[] = data.quizzes;

  private step = signal(0);

  private quizz: WritableSignal<Quizz> = signal({} as Quizz);

  private testFinished = signal(false);

  getTestFinished(): WritableSignal<boolean> {
    return this.testFinished;
  }

  setTestFinished(): void {
    this.testFinished.update(value => !value);
  }

  getData(): Quizz[] {
    return this.data;
  }

  getStep(): WritableSignal<number> {
    return this.step;
  }

  addStep(): void {
    this.step.update(value => value + 1);
  }

  getQuizz(): WritableSignal<Quizz> {
    return this.quizz;
  }

  setQuizz(idx: number) {
    this.quizz.set(this.data[idx]);
  }

  initializeData(): void {
    this.step.set(0);
    this.testFinished.set(false);
    this.quizz.set({} as Quizz);
  }

}
