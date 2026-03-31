import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CaracolService } from './caracol.service';

@Component({
  selector: 'app-caracol',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './caracol.component.html',
  styleUrl: './caracol.component.css'
})
export class CaracolComponent {
  private caracolService = inject(CaracolService);
  
  n: number | null = null;
  matrix: number[][] | null = null;
  error: string = '';
  loading: boolean = false;

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

    this.loading = true;
    this.caracolService.getMatrix(this.n).subscribe({
      next: (data) => {
        this.matrix = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al conectar con el servidor';
        this.loading = false;
      }
    });
  }
}