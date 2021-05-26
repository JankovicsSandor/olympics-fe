import { Athlete } from '@models';
import { AthleteStore } from './athlete.store';
import { Injectable } from '@angular/core';

@Injectable()
export class AthleteService {

  constructor(private store: AthleteStore) { }

  updateAthlete(modifiedAthlete: Athlete) {
    this.store.update(modifiedAthlete.id, modifiedAthlete);
  }

  addNewAthlete(newAthlete: Athlete) {
    this.store.add(newAthlete);
  }
}
