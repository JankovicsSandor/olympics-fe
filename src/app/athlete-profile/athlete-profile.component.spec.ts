import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteProfileComponent } from './athlete-profile.component';

describe('AthleteEditComponent', () => {
  let component: AthleteProfileComponent;
  let fixture: ComponentFixture<AthleteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthleteProfileComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
