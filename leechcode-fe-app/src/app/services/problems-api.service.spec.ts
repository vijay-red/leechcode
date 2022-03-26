import { TestBed } from '@angular/core/testing';

import { ProblemsApiService } from './problems-api.service';

describe('ProblemsApiService', () => {
  let service: ProblemsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
