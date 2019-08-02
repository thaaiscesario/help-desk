import { TestBed } from '@angular/core/testing';

import { FilasService } from './filas.service';

describe('FilasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilasService = TestBed.get(FilasService);
    expect(service).toBeTruthy();
  });
});
