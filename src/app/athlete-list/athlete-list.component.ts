import { Component, OnInit } from '@angular/core';
import { Athlete, Gender, Sport } from '@models';
import { AthleteService } from '@store';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.scss']
})
export class AthleteListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
