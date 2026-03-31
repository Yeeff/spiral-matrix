import { describe, it, expect } from 'vitest';
import { caracolService } from '../caracol.service';

describe('caracolService', () => {

    it('should generate correct spiral matrix for n=3', () => {
    const result = caracolService.generateCaracol(3);
    expect(result.matrix).toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ]);
    expect(result.diagonal).toEqual([1, 9, 5]);
    expect(result.diagonalInversa).toEqual([3, 9, 7]);
  });

  it('should generate correct spiral matrix for n=5', () => {
    const result = caracolService.generateCaracol(5);
    expect(result.matrix).toEqual([
      [1,  2,  3,  4,  5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9],
    ]);
    expect(result.diagonal).toEqual([1, 17, 25, 21, 9]);
    expect(result.diagonalInversa).toEqual([5, 19, 25, 23, 13]);
  });

  it('should generate correct spiral matrix for n=4', () => {
    const result = caracolService.generateCaracol(4);
    expect(result.matrix).toEqual([
      [1,  2,  3,  4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9,  8,  7],
    ]);
    expect(result.diagonal).toEqual([1, 13, 15, 7]);
    expect(result.diagonalInversa).toEqual([4, 14, 16, 10]);
  });

  it('should generate correct spiral matrix for n=15', () => {
    const result = caracolService.generateCaracol(15);
    
    expect(result.matrix.length).toBe(15);
    expect(result.matrix[0].length).toBe(15);
    
    expect(result.matrix[0][0]).toBe(1);
    
    expect(result.diagonal.length).toBe(15);
    expect(result.diagonalInversa.length).toBe(15);
  });

  
});