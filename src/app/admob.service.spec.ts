import { TestBed } from '@angular/core/testing';

import { AdmobService } from './admob.service';

describe('AdmobService', () => {
  let service: AdmobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
