import { TestBed } from '@angular/core/testing';
import { ModeService } from './mode.service';

describe('ModeService', () => {
  let service: ModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial mode as light', () => {
    expect(service.getMode()()).toBe('light');
  });

  it('should change mode from light to dark', () => {
    service.changeMode();
    expect(service.getMode()()).toBe('dark');
  });

  it('should change mode from dark to light', () => {
    service.changeMode(); 
    service.changeMode(); 
    expect(service.getMode()()).toBe('light');
  });
});
