import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ModeService } from './services/mode.service';
import { HeaderComponent } from './components/header/header.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WritableSignal, signal } from '@angular/core'; 

describe('AppComponent', () => {
  let modeServiceStub: Partial<ModeService>;

  beforeEach(async () => {
    modeServiceStub = {
      getMode: () => signal('dark') as WritableSignal<string>, 
    };

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        HeaderComponent,
        QuestionsComponent,
        SolutionsComponent,
        AppComponent
      ],
      declarations: [AppComponent],
      providers: [{ provide: ModeService, useValue: modeServiceStub }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have a mode set by ModeService`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.mode()).toEqual('dark'); 
  });

  it('should render the header component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).not.toBeNull();
  });

  
});
