import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AthleteProfileEditService {

  constructor() { }

  private profileEditable: BehaviorSubject<boolean> = new BehaviorSubject(false);

  getProfileEditable$() {
    console.log("aa");
    return this.profileEditable.asObservable();
  }

  setProfileEditable(value: boolean) {
    this.profileEditable.next(value);
  }
}
