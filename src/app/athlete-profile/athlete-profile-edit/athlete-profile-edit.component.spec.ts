import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteProfileEditComponent } from './athlete-profile-edit.component';

describe('AthleteProfileEditComponent', () => {
  let component: AthleteProfileEditComponent;
  let fixture: ComponentFixture<AthleteProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteProfileEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
