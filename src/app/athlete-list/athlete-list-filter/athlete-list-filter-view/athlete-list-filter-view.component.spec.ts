import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteListFilterViewComponent } from './athlete-list-filter-view.component';

describe('AthleteListFilterViewComponent', () => {
  let component: AthleteListFilterViewComponent;
  let fixture: ComponentFixture<AthleteListFilterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteListFilterViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteListFilterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
