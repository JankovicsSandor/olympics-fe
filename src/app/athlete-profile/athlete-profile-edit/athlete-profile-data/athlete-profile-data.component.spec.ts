import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteProfileDataComponent } from './athlete-profile-data.component';

describe('AthleteProfileDataComponent', () => {
  let component: AthleteProfileDataComponent;
  let fixture: ComponentFixture<AthleteProfileDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteProfileDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteProfileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
