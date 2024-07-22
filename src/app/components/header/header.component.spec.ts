import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent] // Import the standalone component here
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call changeMode on ModeService when onClick is called', () => {
  //   const buttonElement = fixture.nativeElement.querySelector('button'); 
  //   buttonElement.click();
  //   expect(modeServiceStub.changeMode).toHaveBeenCalled();
  // });
});
