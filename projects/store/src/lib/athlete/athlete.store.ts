import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Athlete } from '@models';

export interface AthleteState extends EntityState<Athlete> { }

@Injectable()
@StoreConfig({ name: 'athlete' })
export class AthleteStore extends EntityStore<AthleteState> {

  constructor() {
    super();
  }

}
