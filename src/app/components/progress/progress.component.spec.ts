import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressComponent } from './progress.component';
import { By } from '@angular/platform-browser';

describe('ProgressComponent', () => {
  let component: ProgressComponent;
  let fixture: ComponentFixture<ProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the progress component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default maxValue as 10', () => {
    expect(component.maxValue).toBe(10);
  });

  it('should have default actualValue as 0', () => {
    expect(component.actualValue).toBe(0);
  });

  it('should update maxValue when input changes', () => {
    component.maxValue = 20;
    fixture.detectChanges();
    expect(component.maxValue).toBe(20);
  });

  it('should update actualValue when input changes', () => {
    component.actualValue = 5;
    fixture.detectChanges();
    expect(component.actualValue).toBe(5);
  });
});
