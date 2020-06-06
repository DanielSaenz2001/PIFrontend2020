import { TestBed } from '@angular/core/testing';

import { BeforeLoginService } from './BeforeLoginService';

describe('BeforeLoginService', () => {
  let guard: BeforeLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BeforeLoginService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
