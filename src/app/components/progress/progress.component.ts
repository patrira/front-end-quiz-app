import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [],
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'], // Corrected property name
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ProgressComponent {

  @Input() maxValue = 10;

  @Input() actualValue = 0;

}
