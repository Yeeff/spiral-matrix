import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-caracol',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './caracol.component.html',
  styleUrl: './caracol.component.css'
})
export class CaracolComponent {
  n: number | null = null;
  matrix: number[][] | null = null;
  error: string = '';

  generateMatrix(): void {
    this.error = '';
    this.matrix = null;

    if (this.n === null) {
      this.error = 'Por favor ingresa un número';
      return;
    }

    if (this.n < 3 || this.n > 15) {
      this.error = 'El número debe estar entre 3 y 15';
      return;
    }

    // UI only - backend connection coming later
    this.error = 'Conexión con backend pendiente';
  }
}