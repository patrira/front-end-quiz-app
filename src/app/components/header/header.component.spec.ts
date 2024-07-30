import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ModeService } from '../../services/mode.service';
import { ModeButtonComponent } from '../mode-button/mode-button.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let modeService: ModeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, ModeButtonComponent],
      providers: [ModeService]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    modeService = TestBed.inject(ModeService);
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should call changeMode on modeService when onClick is called', () => {
    const changeModeSpy = jest.spyOn(modeService, 'changeMode');
    component.onClick();
    expect(changeModeSpy).toHaveBeenCalled();
  });
});
