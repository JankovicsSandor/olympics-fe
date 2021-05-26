import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AthleteFilter } from '@models';
@Component({
  selector: 'athlete-list-filter-view',
  templateUrl: './athlete-list-filter-view.component.html',
  styleUrls: ['./athlete-list-filter-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AthleteListFilterViewComponent implements OnInit {
  filterForm: FormGroup;

  @Output() filterResult: EventEmitter<AthleteFilter> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      minBirthDate: [new Date()],
      minWeight: [0],
      minHeight: [0]
    })
  }

  ngOnInit(): void {
  }

  applyFilter() {
    let formValue = this.filterForm.value;
    this.filterResult.emit(<AthleteFilter>{ minDateOfBirth: formValue.minBirthDate, minWeight: formValue.minWeight, minHeight: formValue.minHeight })

  }

}
