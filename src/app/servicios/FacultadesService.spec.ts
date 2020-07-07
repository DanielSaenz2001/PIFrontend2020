import { TestBed } from '@angular/core/testing';

import { FacultadesService } from './FacultadesService';

describe('FacultadesService', () => {
  let service: FacultadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
