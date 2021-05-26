import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AthleteStore, AthleteState } from './athlete.store';

@Injectable()
export class AthleteQuery extends QueryEntity<AthleteState> {

  constructor(protected store: AthleteStore) {
    super(store);
  }

  getAllAthlete() {
    return this.selectAll();
  }

}
