import { AthleteDataProviderService } from '@data-provider';
import { Component, OnInit } from '@angular/core';
import { Athlete, Gender, Sport } from '@models';
import { AthleteService } from '@store';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.scss']
})
export class AthleteListComponent implements OnInit {

  CountryCodes: any[] = ['ad', 'ae', 'af', 'ag', 'ai', 'an', 'ar', 'eg', 'eu', 'hu']
  constructor(private athleteDataprovider: AthleteDataProviderService) { }

  ngOnInit(): void {
  }

  addTestData() {
    let testAthlete1: Athlete = <Athlete>{
      dateOfBirth: "1996-10-15",
      gender: Gender.Male,
      height: 158,
      name: "John Doe",
      nation: this.getRandomCountryCode(),
      sport: Sport.Archery,
      weight: 85
    }
    this.athleteDataprovider.addAthlete(testAthlete1);
  }



  getRandomCountryCode() {
    let randomIndex = Math.floor(Math.random() * this.CountryCodes.length - 1);
    return this.CountryCodes[randomIndex]
  }

}
