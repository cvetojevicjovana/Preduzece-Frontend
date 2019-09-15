import { VrstaOvlascenja } from "app/vrste-ovlascenja/model/VrstaOvlascenja";


export class StavkaMemoranduma {
  redniBroj: RedniBroj;
  napomena: string;
  vrstaOvlascenja: VrstaOvlascenja;
}

export class RedniBroj {
  redniBroj: number;
  memorandumID: number;
}