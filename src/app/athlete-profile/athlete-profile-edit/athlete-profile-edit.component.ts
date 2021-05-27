import { Component, OnInit } from '@angular/core';
import { AthleteProfileEditService } from '../services/athlete-profile-edit.service';

@Component({
  selector: 'athlete-profile-edit',
  templateUrl: './athlete-profile-edit.component.html',
  styleUrls: ['./athlete-profile-edit.component.scss']
})
export class AthleteProfileEditComponent implements OnInit {

  constructor(public profileEditService: AthleteProfileEditService) { }

  ngOnInit(): void {
  }

}
