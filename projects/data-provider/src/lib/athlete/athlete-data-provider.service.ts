import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpClientService } from '../base/base-http-client.class';
import { Athlete } from '@models';
import { AthleteService, AthleteQuery } from '@store';

@Injectable()
export class AthleteDataProviderService extends BaseHttpClientService {

  constructor(protected http: HttpClient, private athleteStore: AthleteService, private athleteQuery: AthleteQuery) {
    super(environment.athleteAPI, http)
  }

  getOneAthleteData(athleteId: number) {
    return this.get<Athlete>(`athlete/${athleteId}`)
  }

  refreshAthleteList() {
    this.get<Athlete[]>("athlete/list").subscribe((value) => {
      let actualAthleteStoreValue = this.athleteQuery.getAllAthlete();
      let removeList = [];
      actualAthleteStoreValue.forEach((oneAthlete) => {
        if (value.findIndex(e => e.id == oneAthlete.id) == -1) {
          removeList.push(oneAthlete.id);
        }
      })
      if (removeList.length != 0) {
        this.athleteStore.deleteAthlete(removeList);
      }
      this.athleteStore.refreshAthleteList(value)
    });
  }

  updateOneAthlete(newAthlete: Athlete) {
    return this.put<Athlete>(`athlete/${newAthlete.id}`, newAthlete);
  }

  addAthlete(newAthlete: Athlete) {
    this.post<Athlete>(`athlete`, newAthlete).subscribe((val) => this.athleteStore.addNewAthlete(val));
  }
}
