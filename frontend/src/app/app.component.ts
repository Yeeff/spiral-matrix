import { Component } from '@angular/core';
import { CaracolComponent } from './features/caracol/caracol.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CaracolComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'espiral';
}
