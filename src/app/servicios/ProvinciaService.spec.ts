import { TestBed } from '@angular/core/testing';

import { ProvinciaService } from './ProvinciaService';

describe('ProvinciaService', () => {
  let service: ProvinciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvinciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
