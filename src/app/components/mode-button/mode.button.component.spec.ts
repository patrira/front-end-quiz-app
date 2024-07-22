import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModeButtonComponent } from './mode-button.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ModeButtonComponent', () => {
  let component: ModeButtonComponent;
  let fixture: ComponentFixture<ModeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModeButtonComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the ModeButtonComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should emit clickButton event when onClick is called', () => {
    
    const spy = jest.spyOn(component.clickButton, 'emit');

    
    component['onClick']();

    
    expect(spy).toHaveBeenCalled();
  });

  it('should trigger onClick when button is clicked', () => {
    
    const spy = jest.spyOn(component.clickButton, 'emit');

   
    const buttonElement = fixture.nativeElement.querySelector('button'); 
    buttonElement.click();

    
    expect(spy).toHaveBeenCalled();
  });
});
