import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpClientService } from '../base/base-http-client.class';
import { Athlete } from '@models';
import { AthleteService } from '@store';

@Injectable()
export class AthleteDataProviderService extends BaseHttpClientService {

  constructor(protected http: HttpClient, private athleteStore: AthleteService) {
    super(environment.athleteAPI, http)
  }

  getOneAthleteData(athleteId: number) {
    return this.get<Athlete>(`athlete/${athleteId}`)
  }

  refreshAthleteList() {
    this.get<Athlete[]>("athlete/list").subscribe((value) => this.athleteStore.refreshAthleteList(value));
  }

  updateOneAthlete(newAthlete: Athlete) {
    return this.put<Athlete>(`athlete/${newAthlete.id}`, newAthlete);
  }
}
