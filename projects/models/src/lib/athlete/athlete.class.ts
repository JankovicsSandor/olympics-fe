import { Sport } from "../sport";
import { Gender } from "./gender.enum";

export class Athlete {
  id: number;
  name: string;
  get age() {
    return this.currentTime.getFullYear() - this.dateOfBirth.getFullYear()
  }
  dateOfBirth: Date;
  nationalityCode: string;
  gender: Gender
  sport: Sport

  private currentTime = new Date();
}
