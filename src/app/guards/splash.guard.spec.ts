import { TestBed } from '@angular/core/testing';

import { SplashGuard } from './splash.guard';

describe('SplashGuard', () => {
  let guard: SplashGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SplashGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
