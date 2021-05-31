import { TestBed } from '@angular/core/testing';

import { CountryService } from './country.service';

describe('CountryService', () => {
  let service: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should unknown country return null', () => {
    expect(service.getCountryNameFromCode("AG")).toBe(null);
  });

  it('should return the correct country name', () => {
    expect(service.getCountryNameFromCode("hu")).toBe("Hungary");
  });
});
