import { TestBed } from '@angular/core/testing';

import { BmiService } from './bmi.service';

describe('IbmService', () => {
  let service: BmiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
