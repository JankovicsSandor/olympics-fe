import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteListFilterComponent } from './athlete-list-filter.component';

describe('AthleteListFilterComponent', () => {
  let component: AthleteListFilterComponent;
  let fixture: ComponentFixture<AthleteListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteListFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
