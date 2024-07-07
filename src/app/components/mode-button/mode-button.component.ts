import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mode-button',
  standalone: true,
  imports: [],
  templateUrl: './mode-button.component.html',
  styleUrl: './mode-button.component.scss'
})
export class ModeButtonComponent {

  @Output() clickButton = new EventEmitter;

  protected onClick(): void {
    this.clickButton.emit();
  }
}
