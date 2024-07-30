import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModeButtonComponent } from './mode-button.component';
import { By } from '@angular/platform-browser';

describe('ModeButtonComponent', () => {
  let component: ModeButtonComponent;
  let fixture: ComponentFixture<ModeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ModeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the mode button component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit clickButton event when onClick is called', () => {
    jest.spyOn(component.clickButton, 'emit');

    component.onClick();

    expect(component.clickButton.emit).toHaveBeenCalled();
  });

  it('should emit clickButton event when button is clicked', () => {
    jest.spyOn(component.clickButton, 'emit');

    const button = fixture.debugElement.query(By.css('button'));
    if (button) {
      button.triggerEventHandler('click', null);
    }

    expect(component.clickButton.emit).toHaveBeenCalled();
  });
});
