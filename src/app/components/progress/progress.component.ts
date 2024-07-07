import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ProgressComponent {

  @Input() maxValue = 10

  @Input() actualValue = 0;

}
