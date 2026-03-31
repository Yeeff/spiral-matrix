export interface CaracolResponse {
  matrix: number[][];
  diagonal: number[];
  diagonalInversa: number[];
}

export interface CaracolService {
  generateCaracol(n: any): CaracolResponse;
}