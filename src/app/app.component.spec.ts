import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ModeService } from './services/mode.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './components/header/header.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let modeService: ModeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        HeaderComponent,
        QuestionsComponent,
        SolutionsComponent,
        AppComponent 
      ],
      providers: [ModeService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    modeService = TestBed.inject(ModeService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have mode as light initially', () => {
    expect(component.mode()).toBe('light');
  });

  it('should change mode when changeMode is called', () => {
    modeService.changeMode();
    fixture.detectChanges();
    expect(component.mode()).toBe('dark');
  });
});
