import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  private mode = signal('light');

  changeMode(): void {
    this.mode.update(value => value === 'light'? 'dark': 'light');
  }

  getMode(): WritableSignal<string> {
    return this.mode;
  }
}
