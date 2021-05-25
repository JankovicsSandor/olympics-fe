import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteListListComponent } from './athlete-list-list.component';

describe('AthleteListListComponent', () => {
  let component: AthleteListListComponent;
  let fixture: ComponentFixture<AthleteListListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteListListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
