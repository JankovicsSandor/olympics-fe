import { TestBed } from '@angular/core/testing';

import { AthleteListFilterService } from './athlete-list-filter.service';

describe('AthleteListFilterService', () => {
  let service: AthleteListFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthleteListFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
