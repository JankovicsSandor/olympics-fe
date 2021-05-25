import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpClientService } from '../base/base-http-client.class';
import { Athlete } from '@models';

@Injectable()
export class AthleteDataProviderService extends BaseHttpClientService {

  constructor(protected http: HttpClient) {
    super(environment.athleteAPI, http)
  }

  getOneAthleteData(athleteId: number) {
    return this.get<Athlete>(`athlete/${athleteId}`)
  }

  refreshAthleteList() {
    return this.get<Athlete[]>("athlete/list");
  }
}
