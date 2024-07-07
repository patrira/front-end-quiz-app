import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ModeService } from './services/mode.service';
import { QuestionsComponent } from './components/questions/questions.component';
import { SolutionsComponent } from './components/solutions/solutions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, QuestionsComponent, SolutionsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mode = inject(ModeService).getMode();
}
