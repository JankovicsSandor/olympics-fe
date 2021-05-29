import { AthleteDataProviderService } from '@data-provider';
import { Component, OnInit } from '@angular/core';
import { Athlete, Gender, Sport } from '@models';
import { AthleteService } from '@store';
import { uniqueNamesGenerator, Config, countries } from 'unique-names-generator';
@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.scss']
})
export class AthleteListComponent implements OnInit {

  config: Config = {
    dictionaries: [countries]
  }
  CountryCodes: any[] = ['ad', 'ae', 'af', 'ag', 'ai', 'an', 'ar', 'eg', 'eu', 'hu']
  constructor(private athleteDataprovider: AthleteDataProviderService) { }

  ngOnInit(): void {
  }

  addTestData() {
    let testAthlete1: Athlete = <Athlete>{
      dateOfBirth: `${this.getRandomBetween(1950, 2000)}-${this.getRandomBetween(1, 12)}-${this.getRandomBetween(1, 28)}`,
      gender: Gender.Male,
      height: this.getRandomBetween(150, 220),
      name: `${uniqueNamesGenerator(this.config)} ${uniqueNamesGenerator(this.config)}`,
      nation: this.getRandomCountryCode(),
      sport: Sport.Archery,
      weight: this.getRandomBetween(70, 150)
    }
    this.athleteDataprovider.addAthlete(testAthlete1);
  }



  getRandomCountryCode() {
    let randomIndex = this.getRandomBetween(0, this.CountryCodes.length - 1);
    return this.CountryCodes[randomIndex]
  }

  getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}
