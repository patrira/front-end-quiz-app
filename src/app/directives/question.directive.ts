import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[question]',
  standalone: true
})
export class QuestionDirective implements OnChanges {

  @Input('question') htmlContent!: string;

  constructor(private elRef: ElementRef) {}

  ngOnChanges() {
    const questionWithSpan: string[] = [];

    this.htmlContent.split(' ').forEach((value: string) => {
      questionWithSpan.push(`<span>${value}&nbsp;</span>`)
    });

    this.elRef.nativeElement.innerHTML = questionWithSpan.join('');
  }

}
