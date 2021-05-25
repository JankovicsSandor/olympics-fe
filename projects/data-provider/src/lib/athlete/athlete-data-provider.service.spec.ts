import { TestBed } from '@angular/core/testing';

import { AthleteDataProviderService } from './athlete-data-provider.service';

describe('AthleteDataProviderService', () => {
  let service: AthleteDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthleteDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
