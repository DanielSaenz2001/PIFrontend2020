import { TestBed } from '@angular/core/testing';

import { ValidarExpService } from './validarExpService';

describe('ValidarExpService', () => {
  let service: ValidarExpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidarExpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
