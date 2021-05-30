import { ReplaySubject, Subject } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AthleteProfileEditService } from '../services/athlete-profile-edit.service';
import { Athlete, Gender, SimpleSelect, Sport } from '@models';
import { takeUntil } from 'rxjs/operators';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'athlete-profile-edit',
  templateUrl: './athlete-profile-edit.component.html',
  styleUrls: ['./athlete-profile-edit.component.scss']
})
export class AthleteProfileEditComponent implements OnInit, OnDestroy {

  activeForm: FormGroup;
  athleteProfile: FormGroup;
  profileEditable: ReplaySubject<boolean> = new ReplaySubject();
  availableSportList: SimpleSelect[]
  destroy$: Subject<void> = new Subject();
  availableGenderList: SimpleSelect[];

  actualAthlete: Athlete;
  countryList: SimpleSelect[];
  constructor(public profileEditService: AthleteProfileEditService, private fb: FormBuilder, private countryCode: CountryService) {
    this.athleteProfile = this.fb.group({
      name: [],
      dateOfBirth: [],
      nation: [],
      gender: [],
      height: [],
      weight: [],
      sport: [],
    })

    this.activeForm = this.athleteProfile;

    this.availableSportList = Object.keys(Sport).filter(k => isNaN(Number(k))).map((item) => <SimpleSelect>{ id: item, text: item });
    this.availableGenderList = Object.keys(Gender).filter(k => isNaN(Number(k))).map((item) => <SimpleSelect>{ id: item, text: item });
    this.profileEditService.getProfileEditable$().pipe(takeUntil(this.destroy$)).subscribe(this.profileEditable);
    this.countryList = this.countryCode.getCountryList();
    this.profileEditService.getAthleteProfileData$().pipe(takeUntil(this.destroy$)).subscribe((val) => {
      this.actualAthlete = val;
      this.activeForm.patchValue({
        name: val.name,
        dateOfBirth: val.dateOfBirth,
        nation: val.nation,
        gender: val.gender,
        height: val.height,
        weight: val.weight,
        sport: val.sport,
      })
    })

  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngOnInit(): void {
  }

  setContentEditable() {
    this.profileEditService.setProfileEditable(true)
  }

  cancelEdit() {
    this.activeForm.patchValue({
      name: this.actualAthlete.name,
      dateOfBirth: this.actualAthlete.dateOfBirth,
      nation: this.actualAthlete.nation,
      gender: this.actualAthlete.gender,
      height: this.actualAthlete.height,
      weight: this.actualAthlete.weight,
      sport: this.actualAthlete.sport,
    })
    this.profileEditService.setProfileEditable(false);
  }

  saveAthlete() {
    let modifiedValue = this.activeForm.value;
    this.actualAthlete.name = modifiedValue.name;
    this.actualAthlete.nation = modifiedValue.nation;
    this.actualAthlete.sport = modifiedValue.sport;
    this.actualAthlete.weight = modifiedValue.weight;
    this.actualAthlete.height = modifiedValue.height;
    this.actualAthlete.dateOfBirth = modifiedValue.dateOfBirth
    this.actualAthlete.gender = modifiedValue.gender;

    this.profileEditService.updateAthleteProfile(this.actualAthlete)
    this.profileEditService.setProfileEditable(true);
  }

}
