
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AthleteDataProviderService } from '@data-provider';
import { Athlete } from '@models';
import { AthleteService } from '@store';
import { Router } from '@angular/router';

@Injectable()
export class AthleteProfileEditService {

  constructor(private athleteData: AthleteDataProviderService, private athleteStoreService: AthleteService, private router: Router) { }

  private profileEditable: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private selectedAthleteProfile: ReplaySubject<Athlete> = new ReplaySubject();

  getProfileEditable$() {
    return this.profileEditable.asObservable();
  }

  setProfileEditable(value: boolean) {
    this.profileEditable.next(value);
  }

  getAthleteProfileData$() {
    return this.selectedAthleteProfile.asObservable();
  }

  setAthleteProfileId(id: number) {
    this.athleteData.getOneAthleteData(id).subscribe((val) => this.selectedAthleteProfile.next(val));
  }

  updateAthleteProfile(updatedAthlete: Athlete) {
    this.athleteData.updateOneAthlete(updatedAthlete).subscribe(() => {
      this.athleteStoreService.updateAthlete(updatedAthlete);
      this.router.navigate(["athlete", "list"]);
    })
  }
}
