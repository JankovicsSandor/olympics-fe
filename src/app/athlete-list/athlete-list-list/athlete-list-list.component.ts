import { AthleteListFilterService } from './../services/athlete-list-filter.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'athlete-list-list',
  templateUrl: './athlete-list-list.component.html',
  styleUrls: ['./athlete-list-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AthleteListListComponent implements OnInit {

  constructor(public athletFilterService: AthleteListFilterService) { }

  ngOnInit(): void {
  }

}
