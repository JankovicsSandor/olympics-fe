import { Athlete } from './athlete.interface';
export class AthleteGroup {
  nationality: string;
  get size() {
    return this.athletes.length
  };
  athletes: Athlete[]

  constructor() {
    this.athletes = [];
  }
}
