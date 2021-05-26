import { Sport } from "../sport";
import { Gender } from "./gender.enum";

export interface Athlete {
  id: number;
  name: string;
  dateOfBirth: string;
  nationalityCode: string;
  gender: Gender
  sport: Sport
  weight: number;
  height: number
}
