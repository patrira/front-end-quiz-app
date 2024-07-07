import { NgClass } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-solution',
  standalone: true,
  imports: [NgClass],
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SolutionComponent {
  @Input() variant: 'none' | 'correct' | 'incorrect' = 'none';

  @Input() selected = false;
}
