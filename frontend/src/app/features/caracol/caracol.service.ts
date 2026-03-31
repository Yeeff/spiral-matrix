import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '../../core/services/api.service';

export interface CaracolResponse {
  matrix: number[][];
  diagonal: number[];
  diagonalInversa: number[];
}

@Injectable({
  providedIn: 'root'
})
export class CaracolService {
  private apiService = inject(ApiService);

  getMatrix(n: number): Observable<number[][]> {
    return this.apiService.getCaracol(n).pipe(
      map(response => response.matrix)
    );
  }
}