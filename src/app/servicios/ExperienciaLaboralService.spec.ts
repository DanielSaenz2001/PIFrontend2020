import { TestBed } from '@angular/core/testing';

import { ExperienciaLaboralService } from './ExperienciaLaboralService';

describe('ExperienciaLaboralService', () => {
  let service: ExperienciaLaboralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienciaLaboralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
