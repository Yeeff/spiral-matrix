import { CaracolService } from './interfaces/caracol.interface';

export const caracolService: CaracolService = {
  generateCaracol(n: number): number[][] {
    const matrix: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

    let counter = 1;
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;

    while (top <= bottom && left <= right) {
      
      for (let col = left; col <= right; col++) {
        matrix[top][col] = counter++;
      }
      top++;
      
      for (let row = top; row <= bottom; row++) {
        matrix[row][right] = counter++;
      }
      right--;
 
      if (top <= bottom) {
        for (let col = right; col >= left; col--) {
          matrix[bottom][col] = counter++;
        }
        bottom--;
      }

      if (left <= right) {
        for (let row = bottom; row >= top; row--) {
          matrix[row][left] = counter++;
        }
        left++;
      }
    }

    return matrix;
  }
};