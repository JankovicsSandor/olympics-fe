import { TestBed } from '@angular/core/testing';

import { AthleteProfileEditService } from './athlete-profile-edit.service';

describe('AthleteProfileEditService', () => {
  let service: AthleteProfileEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthleteProfileEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
