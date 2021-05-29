import { Sport } from "../sport";
import { Gender } from "./gender.enum";

export interface Athlete {
  id: number;
  name: string;
  dateOfBirth: string;
  nation: string;
  gender: Gender
  sport: Sport
  weight: number;
  height: number
}
