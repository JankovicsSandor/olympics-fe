import { Injectable } from '@angular/core';
import { Athlete, AthleteFilter, AthleteGroup } from '@models';
import { AthleteQuery } from '@store';
import { BehaviorSubject, combineLatest, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AthleteListFilterService {

  constructor(private athleteStoreQuery: AthleteQuery) {
    combineLatest([this.athleteStoreQuery.getAllAthlete$(), this.athleteFilter]).pipe(map(([allAthleteList, filterObject]) => {
      let resultList: AthleteGroup[] = [];

      if (filterObject == null) {
        for (const oneAthlete of allAthleteList) {
          this.AddAthleteToResultList(resultList, oneAthlete);
        }
      } else {
        for (const oneAthlete of allAthleteList) {
          if (filterObject.minDateOfBirth) {
            if (new Date(oneAthlete.dateOfBirth).getTime() >= filterObject.minDateOfBirth.getTime()) {
              this.AddAthleteToResultList(resultList, oneAthlete);
            }
          }
          if (filterObject.minHeight) {
            if (oneAthlete.height >= filterObject.minHeight) {
              this.AddAthleteToResultList(resultList, oneAthlete);
            }
          }
          if (filterObject.minWeight) {
            if (oneAthlete.weight >= filterObject.minWeight) {
              this.AddAthleteToResultList(resultList, oneAthlete);
            }
          }
        }
      }
      return resultList;
    })).subscribe(this.filteredAtheteList);
  }

  private filteredAtheteList: ReplaySubject<AthleteGroup[]> = new ReplaySubject(1);
  private athleteFilter: BehaviorSubject<AthleteFilter> = new BehaviorSubject(null);

  private AddAthleteToResultList(resultList: AthleteGroup[], oneAthlete: Athlete) {
    let athleteNationality = resultList.find(nation => nation.nationality == oneAthlete.nation);
    if (athleteNationality) {
      athleteNationality.athletes.push(oneAthlete);
    } else {
      resultList.push(<AthleteGroup>{ nationality: oneAthlete.nation, athletes: [oneAthlete] });
    }
  }

  getFilteredAthletList() {
    return this.filteredAtheteList.asObservable();
  }

  addMinWeightFilter(minWeight: number) {
    let actualValue = this.athleteFilter.value;
    actualValue.minWeight = minWeight;
    this.athleteFilter.next(actualValue);
  }

  addMinHeightFilter(minHeight: number) {
    let actualValue = this.athleteFilter.value;
    actualValue.minHeight = minHeight;
    this.athleteFilter.next(actualValue);
  }

  addMinBirthdateFilter(minBirthdate: Date) {
    let actualValue = this.athleteFilter.value;
    actualValue.minDateOfBirth = minBirthdate;
    this.athleteFilter.next(actualValue);
  }

  addCombinedFilter(filter: AthleteFilter) {
    this.athleteFilter.next(filter);
  }
}
