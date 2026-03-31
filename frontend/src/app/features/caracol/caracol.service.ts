import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CaracolService {
  private apiService = inject(ApiService);

  getMatrix(n: number): Observable<number[][]> {
    return this.apiService.getCaracol(n);
  }
}