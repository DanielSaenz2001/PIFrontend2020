import { TestBed } from '@angular/core/testing';

import { PostradoOtrosService } from './PostradoOtrosService';

describe('PostradoOtrosService', () => {
  let service: PostradoOtrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostradoOtrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
