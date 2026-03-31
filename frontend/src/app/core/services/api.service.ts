import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000';

  getCaracol(n: number): Observable<number[][]> {
    return this.http.get<number[][]>(`${this.baseUrl}/caracol/${n}`);
  }
}