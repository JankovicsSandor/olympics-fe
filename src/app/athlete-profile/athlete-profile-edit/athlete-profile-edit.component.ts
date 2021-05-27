import { ReplaySubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AthleteProfileEditService } from '../services/athlete-profile-edit.service';

@Component({
  selector: 'athlete-profile-edit',
  templateUrl: './athlete-profile-edit.component.html',
  styleUrls: ['./athlete-profile-edit.component.scss']
})
export class AthleteProfileEditComponent implements OnInit {
  athleteProfile: FormGroup;
  profileEditable: ReplaySubject<boolean> = new ReplaySubject();

  constructor(public profileEditService: AthleteProfileEditService, private fb: FormBuilder) {
    this.athleteProfile = this.fb.group({
      name: ["items"],
      dateOfBirth: [],
      age: [],
      nation: [],
      gender: [],
      height: [],
      weight: [],
      sport: [],
    })

    this.athleteProfile.valueChanges.subscribe((val) => console.log(val));
    this.profileEditService.getProfileEditable$().subscribe(this.profileEditable);
  }

  ngOnInit(): void {
  }

}
