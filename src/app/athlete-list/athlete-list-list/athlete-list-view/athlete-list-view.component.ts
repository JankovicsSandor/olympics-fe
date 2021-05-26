import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AthleteGroup } from '@models';

@Component({
  selector: 'athlete-list-view',
  templateUrl: './athlete-list-view.component.html',
  styleUrls: ['./athlete-list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AthleteListViewComponent implements OnInit {

  @Input() athleteGroupList: AthleteGroup[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
