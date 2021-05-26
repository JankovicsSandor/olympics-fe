import { AthleteListFilterService } from './../services/athlete-list-filter.service';
import { Component, OnInit } from '@angular/core';
import { AthleteFilter } from '@models';

@Component({
  selector: 'athlete-list-filter',
  templateUrl: './athlete-list-filter.component.html',
  styleUrls: ['./athlete-list-filter.component.scss']
})
export class AthleteListFilterComponent implements OnInit {

  constructor(private filterService: AthleteListFilterService) { }

  ngOnInit(): void {
  }

  applyFilter(filterObject: AthleteFilter) {
    this.filterService.addCombinedFilter(filterObject);
  }

}
