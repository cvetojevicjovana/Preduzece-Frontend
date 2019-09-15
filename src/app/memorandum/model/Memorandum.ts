import { Spediter } from "app/spediter/model/Spediter";
import { StavkaMemoranduma } from "./StavkaMemoranduma";
import { Radnik } from "./Radnik";

export class Memorandum {
  memorandumID: number;
  datumOd: Date;
  datumDo: Date;
  status: string;
  spediter: Spediter;
  radnik: Radnik;
  stavkeMemoranduma: StavkaMemoranduma[];
}