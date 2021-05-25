import { Sport } from "../sport";
import { Gender } from "./gender.enum";

export interface Athlete {
  id: number;
  name: string;
  dateOfBirth: Date;
  nationalityCode: string;
  gender: Gender
  sport: Sport
}
