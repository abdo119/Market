import { TestBed } from '@angular/core/testing';

import { GurddGurd } from './gurdd.service';

describe('GurddGurd', () => {
  let service: GurddGurd;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GurddGurd);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
