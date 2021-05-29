import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AthleteProfileEditService } from './services/athlete-profile-edit.service';

@Component({
  selector: 'app-athlete-profile',
  templateUrl: './athlete-profile.component.html',
  styleUrls: ['./athlete-profile.component.scss']
})
export class AthleteProfileComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private editService: AthleteProfileEditService) {
    this.ar.params.subscribe(params => {
      console.log(params) //log the entire params object

      console.log(params['id']) //log the value of id
      if (params && params['id'] && !isNaN(Number(params['id']))) {
        this.editService.setAthleteProfileId(params['id'])
      }
    });
  }

  ngOnInit(): void {
  }

}
