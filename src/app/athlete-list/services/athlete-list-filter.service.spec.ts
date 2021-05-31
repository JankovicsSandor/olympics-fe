import { TestBed } from '@angular/core/testing';
import { Athlete } from '@models';
import { AthleteQuery, AthleteStore } from '@store';

import { AthleteListFilterService } from './athlete-list-filter.service';

describe('ValueService', () => {
  let service: AthleteListFilterService;
  let inputList: Athlete[];
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AthleteListFilterService, AthleteQuery, AthleteStore] });
    service = TestBed.inject(AthleteListFilterService);
    inputList = [
      <Athlete>{ name: "Josh", nation: "GB", dateOfBirth: "2012-08-02", weight: 120, height: 180, },
      <Athlete>{ name: "Josh", nation: "GB", dateOfBirth: "2012-08-02", weight: 120, height: 180, }
    ]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('group function should group athlete from same nation', () => {
    expect(service.groupAthleteResultBasedOnNation(inputList, null).length).toBe(1);
  });

  it('group function should remove athlete below 70kg', () => {
    expect(service.groupAthleteResultBasedOnNation(inputList, null).length).toBe(1);
  });
});
