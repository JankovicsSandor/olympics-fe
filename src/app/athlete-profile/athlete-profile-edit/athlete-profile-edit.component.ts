import { ReplaySubject, Subject } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AthleteProfileEditService } from '../services/athlete-profile-edit.service';
import { Gender, SimpleSelect, Sport } from '@models';
import { takeUntil } from 'rxjs/operators';

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
  editProfile: FormGroup;
  availableGenderList: SimpleSelect[];
  actualAthlete: import("c:/Users/Sanyi/Desktop/Projektmunka/sjankovics-olympics-fe/projects/models/src/public-api").Athlete;
  constructor(public profileEditService: AthleteProfileEditService, private fb: FormBuilder) {
    this.athleteProfile = this.fb.group({
      name: ["items"],
      dateOfBirth: [],
      nation: [],
      gender: [],
      height: [],
      weight: [],
      sport: [Sport.Athletics],
    })

    this.editProfile = this.fb.group({
      name: ["items"],
      dateOfBirth: [],
      nation: [],
      gender: [],
      height: [],
      weight: [],
      sport: [Sport.Athletics],
    })

    this.activeForm = this.athleteProfile;

    this.availableSportList = Object.keys(Sport).filter(k => isNaN(Number(k))).map((item) => <SimpleSelect>{ id: item, text: item });
    this.availableGenderList = Object.keys(Gender).filter(k => isNaN(Number(k))).map((item) => <SimpleSelect>{ id: item, text: item });
    this.profileEditService.getProfileEditable$().pipe(takeUntil(this.destroy$)).subscribe(this.profileEditable);

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
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  setContentEditable() {
    let actualprofileValue = this.athleteProfile.value;
    this.editProfile.patchValue(actualprofileValue);
    this.activeForm = this.editProfile;
    this.profileEditService.setProfileEditable(true)
  }

  cancelEdit() {
    this.activeForm = this.athleteProfile;
    this.profileEditService.setProfileEditable(false);
  }

  saveAthlete() {
    this.profileEditService.setProfileEditable(true);
  }

}
