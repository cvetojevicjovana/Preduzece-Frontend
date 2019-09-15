import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'app/shared/api.service';
import { Memorandum } from '../model/Memorandum';
import { Spediter } from 'app/spediter/model/Spediter';
import { VrstaOvlascenja } from 'app/vrste-ovlascenja/model/VrstaOvlascenja';
import { StavkaMemoranduma, RedniBroj } from '../model/StavkaMemoranduma';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-unos-memoranduma',
  templateUrl: './unos-memoranduma.component.html',
  styleUrls: ['./unos-memoranduma.component.scss']
})
export class UnosMemorandumaComponent implements OnInit {
  @Input() memorandumi: Memorandum[];
  @Output() updateMemorandumi = new EventEmitter<Memorandum[]>();

  memorandum: Memorandum = {
    memorandumID: 0,
    datumOd: null,
    datumDo: null,
    status: 'U pripremi',
    spediter: null,
    radnik: null,
    stavkeMemoranduma: null
  };
  selektovanSpediter: Spediter = {
    spediterID: 0,
    naziv: ' ',
    adresa: ' ',
    telefon: ' ',
    pib: ' '
  };
  spediteri: Spediter[];
  vrsteOvlascenja: VrstaOvlascenja[];
  checkedVrstaOvlascenja: VrstaOvlascenja;
  napomena: string;
  stavkeMemoranduma: StavkaMemoranduma[] = [];
  checkedStavkaMemoranduma: number;
  data: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.popuniComboBox();
    this.allVrsteOvlascenja();
  }

  popuniComboBox() {
    this.api.getSpediteri().subscribe(
      res => {
        this.spediteri = res;
      },
      err => {
        alert("Nije moguće učitati špeditere!");
      }
    );
  }

  postaviSpeditera(spediter) {
    this.selektovanSpediter = spediter;
    this.memorandum.spediter = spediter;
    this.findSpediter(spediter.spediterID);
  }

  findSpediter(id: number) {

    this.api.findSpediter(id).subscribe(
      res => {
        this.memorandum.spediter = res;
      },
      err => {
        alert("Nije moguće učitati špeditera!");
      }
    );

  }

  public allVrsteOvlascenja() {
    this.api.getVrsteOvlascenja().subscribe(
      res => {
        this.vrsteOvlascenja = res;
      },
      err => {
        alert("Nije moguće pronaći vrste ovlašćenja!");
      }
    );
  }

  cekiranaVrstaOvlascenja(vrstaOvlascenja: VrstaOvlascenja) {
    this.checkedVrstaOvlascenja = vrstaOvlascenja;

  }

  dodajOdabranuStavku() {
    var stavkaMemoranduma: StavkaMemoranduma = {
      redniBroj: {
        redniBroj: 1,
        memorandumID: 0
      },
      napomena: this.napomena,
      vrstaOvlascenja: this.checkedVrstaOvlascenja
    }
    this.stavkeMemoranduma.push(stavkaMemoranduma);
    this.postaviRedneBrojeve();
    this.allVrsteOvlascenja();
    this.napomena = null;
  }

  sacuvajMemorandum() {
    this.memorandum.stavkeMemoranduma = this.stavkeMemoranduma;
    this.memorandum.spediter = this.selektovanSpediter;
    this.api.saveMemorandum(this.memorandum).subscribe(
      res => {
        alert("Memorandum je sačuvan!");
        this.memorandumi.push(res);
        this.updateMemorandumi.emit(this.memorandumi);
        this.allVrsteOvlascenja();
      },
      err => {
        alert("Nije moguće sačuvati memorandum!");
      }
    );
    this.resetujPolja();
  }

  public postaviRedneBrojeve() {
    var redniBroj: number = 1;
    this.stavkeMemoranduma.forEach(s => {
      s.redniBroj.redniBroj = redniBroj;
      redniBroj = redniBroj + 1;
    });
  }

  onSelect(event, i) {
    this.checkedStavkaMemoranduma = i;
  }

  obrisiOdabranuStavku(stavka: StavkaMemoranduma) {
    for (let i = 0; i < this.stavkeMemoranduma.length; ++i) {
      if (this.stavkeMemoranduma[i].redniBroj === stavka.redniBroj) {
        this.stavkeMemoranduma.splice(i, 1);
      }
    }
    this.postaviRedneBrojeve();
  }

  resetujPolja() {
    this.memorandum.memorandumID = null;
    this.memorandum.datumDo = null;
    this.memorandum.datumOd = null;
    this.memorandum.spediter = null;
    this.stavkeMemoranduma = null;
    this.selektovanSpediter.telefon = null;
    this.selektovanSpediter.naziv = null;
    this.selektovanSpediter.adresa = null;
    this.vrsteOvlascenja = null;
    this.napomena = null;
  }

}



