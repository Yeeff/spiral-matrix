import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaracolComponent } from './caracol.component';
import { CaracolService } from './caracol.service';
import { of, delay, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('CaracolComponent', () => {
  let component: CaracolComponent;
  let fixture: ComponentFixture<CaracolComponent>;
  let caracolServiceMock: jasmine.SpyObj<CaracolService>;

  beforeEach(() => {
    caracolServiceMock = jasmine.createSpyObj('CaracolService', ['getMatrix', 'getFullResponse']);

    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, CaracolComponent],
      providers: [
        { provide: CaracolService, useValue: caracolServiceMock }
      ]
    });

    fixture = TestBed.createComponent(CaracolComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error when n is null', () => {
    component.n = null;
    component.generateMatrix();
    expect(component.error).toBe('Por favor ingresa un número');
    expect(component.matrix).toBeNull();
  });

  it('should show error when n is less than 3', () => {
    component.n = 2;
    component.generateMatrix();
    expect(component.error).toBe('El número debe estar entre 3 y 15');
    expect(component.matrix).toBeNull();
  });

  it('should show error when n is greater than 15', () => {
    component.n = 16;
    component.generateMatrix();
    expect(component.error).toBe('El número debe estar entre 3 y 15');
    expect(component.matrix).toBeNull();
  });

  it('should call service and set matrix when n is valid', () => {
    const mockResponse = {
      matrix: [[1, 2, 3], [8, 9, 4], [7, 6, 5]],
      diagonal: [1, 9, 5],
      diagonalInversa: [3, 9, 7]
    };
    caracolServiceMock.getFullResponse.and.returnValue(of(mockResponse));

    component.n = 3;
    component.generateMatrix();

    expect(caracolServiceMock.getFullResponse).toHaveBeenCalledWith(3);
    expect(component.matrix).toEqual(mockResponse.matrix);
    expect(component.diagonal).toEqual(mockResponse.diagonal);
    expect(component.diagonalInversa).toEqual(mockResponse.diagonalInversa);
    expect(component.error).toBe('');
  });

  it('should handle service error', () => {
    caracolServiceMock.getFullResponse.and.returnValue(throwError(() => new Error('Error')));

    component.n = 5;
    component.generateMatrix();

    expect(component.error).toBe('Error al conectar con el servidor');
    expect(component.matrix).toBeNull();
  });

  it('should set loading to true while fetching', () => {
    const mockResponse = {
      matrix: [[1, 2], [4, 3]],
      diagonal: [1, 3],
      diagonalInversa: [2, 4]
    };
    caracolServiceMock.getFullResponse.and.returnValue(of(mockResponse).pipe(delay(0)));

    expect(component.loading).toBe(false);

    component.n = 5;
    component.generateMatrix();

    expect(component.loading).toBe(true);
  });
});