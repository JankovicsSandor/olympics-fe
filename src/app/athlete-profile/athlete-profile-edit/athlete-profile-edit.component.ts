import { ReplaySubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AthleteProfileEditService } from '../services/athlete-profile-edit.service';
import { SimpleSelect, Sport } from '@models';

@Component({
  selector: 'athlete-profile-edit',
  templateUrl: './athlete-profile-edit.component.html',
  styleUrls: ['./athlete-profile-edit.component.scss']
})
export class AthleteProfileEditComponent implements OnInit {

  activeForm: FormGroup;
  athleteProfile: FormGroup;
  profileEditable: ReplaySubject<boolean> = new ReplaySubject();
  availableSportList: SimpleSelect[]
  editProfile: FormGroup;
  constructor(public profileEditService: AthleteProfileEditService, private fb: FormBuilder) {
    this.athleteProfile = this.fb.group({
      name: ["items"],
      dateOfBirth: [],
      age: [],
      nation: [],
      gender: [],
      height: [],
      weight: [],
      sport: [Sport.Athletics],
    })

    this.editProfile = this.fb.group({
      name: ["items"],
      dateOfBirth: [],
      age: [],
      nation: [],
      gender: [],
      height: [],
      weight: [],
      sport: [Sport.Athletics],
    })

    this.activeForm = this.athleteProfile;

    this.availableSportList = Object.keys(Sport).filter(k => isNaN(Number(k))).map((item) => <SimpleSelect>{ id: item, text: item });

    this.athleteProfile.valueChanges.subscribe((val) => console.log(val));
    this.profileEditService.getProfileEditable$().subscribe(this.profileEditable);
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
