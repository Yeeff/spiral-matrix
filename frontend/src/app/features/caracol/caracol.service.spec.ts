import { TestBed } from '@angular/core/testing';
import { CaracolService } from './caracol.service';
import { ApiService } from '../../core/services/api.service';
import { of } from 'rxjs';

describe('CaracolService', () => {
  let service: CaracolService;
  let apiServiceMock: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    apiServiceMock = jasmine.createSpyObj('ApiService', ['getCaracol']);

    TestBed.configureTestingModule({
      providers: [
        CaracolService,
        { provide: ApiService, useValue: apiServiceMock }
      ]
    });

    service = TestBed.inject(CaracolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call apiService.getCaracol with correct n', () => {
    const mockMatrix = [[1, 2, 3], [8, 9, 4], [7, 6, 5]];
    apiServiceMock.getCaracol.and.returnValue(of(mockMatrix));

    service.getMatrix(3).subscribe(matrix => {
      expect(matrix).toEqual(mockMatrix);
      expect(apiServiceMock.getCaracol).toHaveBeenCalledWith(3);
    });
  });
});