import { AthleteDataProviderService } from '@data-provider';
import { Component, OnInit } from '@angular/core';
import { Athlete, Gender, Sport } from '@models';
import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';
import { CountryService } from '../services/country.service';
@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.scss']
})
export class AthleteListComponent implements OnInit {

  config: Config = {
    dictionaries: [names]
  }

  constructor(private athleteDataprovider: AthleteDataProviderService, private countryService: CountryService) { }

  ngOnInit(): void {
    this.athleteDataprovider.refreshAthleteList();
  }

  addTestData() {
    let testAthlete1: Athlete = <Athlete>{
      dateOfBirth: `${this.getRandomBetween(1950, 2000)}-01-01`,
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
    let countryList = this.countryService.getCountryList();
    let randomIndex = this.getRandomBetween(0, countryList.length - 1);
    return countryList[randomIndex].id
  }

  getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}
