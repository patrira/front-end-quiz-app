import { Component, inject } from '@angular/core';
import { ModeButtonComponent } from '../mode-button/mode-button.component';
import { ModeService } from '../../services/mode.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ModeButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  modeService = inject(ModeService);

  protected onClick(): void {
    this.modeService.changeMode();
  }
}
