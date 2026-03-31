import { describe, it, expect } from 'vitest';
import { caracolService } from '../caracol.service';

describe('caracolService', () => {

    it('should generate correct spiral matrix for n=3', () => {
    const result = caracolService.generateCaracol(3);
    expect(result).toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ]);
  });

  it('should generate correct spiral matrix for n=5', () => {
    const result = caracolService.generateCaracol(5);
    expect(result).toEqual([
      [1,  2,  3,  4,  5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9],
    ]);
  });

  it('should generate correct spiral matrix for n=4', () => {
    const result = caracolService.generateCaracol(4);
    expect(result).toEqual([
      [1,  2,  3,  4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9,  8,  7],
    ]);
  });

  it('should generate correct spiral matrix for n=15', () => {
    const result = caracolService.generateCaracol(15);
    
    expect(result.length).toBe(15);
    expect(result[0].length).toBe(15);
    
    expect(result[0][0]).toBe(1);
  });

 
});