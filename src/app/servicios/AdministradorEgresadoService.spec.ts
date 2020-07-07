import { TestBed } from '@angular/core/testing';

import { AdministradorEgresadoService } from './AdministradorEgresadoService';

describe('AdministradorEgresadoService', () => {
  let service: AdministradorEgresadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministradorEgresadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
