import { SimpleSelect } from '@models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private CountryCodes: SimpleSelect[] = [<SimpleSelect>{ id: 'ad', text: "Andorra" },
  <SimpleSelect>{ id: 'ae', text: "United Arab Emirates" },
  <SimpleSelect>{ id: 'af', text: "Afghanistan" },
  <SimpleSelect>{ id: 'ag', text: "Antigua and Barbuda" },
  <SimpleSelect>{ id: 'ai', text: "Anguilla" },
  <SimpleSelect>{ id: 'an', text: "Netherlands Antilles" },
  <SimpleSelect>{ id: 'ar', text: "Argentina" },
  <SimpleSelect>{ id: 'eg', text: "Egypt" },
  <SimpleSelect>{ id: 'eu', text: "Europe" },
  <SimpleSelect>{ id: 'hu', text: "Hungary" }]
  constructor() { }

  getCountryNameFromCode(code: string) {
    let actualCountry = this.CountryCodes.find(e => e.id == code)
    if (actualCountry) {
      return actualCountry.text
    }
    return null;
  }

  getCountryList() {
    return this.CountryCodes;
  }
}
