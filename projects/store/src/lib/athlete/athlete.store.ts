import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Athlete, Gender, Sport } from '@models';

export interface AthleteState extends EntityState<Athlete> { }

const initialAtlete = [
  <Athlete>{ dateOfBirth: new Date("2016.04.04"), name: "Josh Josh", height: 165.5, weight: 45, sport: Sport.Archery, nationalityCode: "GB", gender: Gender.Other }
]

@Injectable()
@StoreConfig({ name: 'athlete' })
export class AthleteStore extends EntityStore<AthleteState> {

  constructor() {
    super(initialAtlete);
  }

}
