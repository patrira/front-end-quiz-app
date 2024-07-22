import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressComponent } from './progress.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProgressComponent', () => {
  let component: ProgressComponent;
  let fixture: ComponentFixture<ProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressComponent],
      schemas: [NO_ERRORS_SCHEMA], // Use to ignore template errors not relevant to the test
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the ProgressComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have default maxValue as 10', () => {
    expect(component.maxValue).toBe(10);
  });

  it('should have default actualValue as 0', () => {
    expect(component.actualValue).toBe(0);
  });

  it('should update maxValue correctly', () => {
    component.maxValue = 20;
    fixture.detectChanges();
    expect(component.maxValue).toBe(20);
  });

  it('should update actualValue correctly', () => {
    component.actualValue = 5;
    fixture.detectChanges();
    expect(component.actualValue).toBe(5);
  });
});
