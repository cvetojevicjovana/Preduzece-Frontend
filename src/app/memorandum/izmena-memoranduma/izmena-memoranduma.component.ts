import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'app/shared/api.service';
import { VrstaOvlascenja } from 'app/vrste-ovlascenja/model/VrstaOvlascenja';
import { Memorandum } from '../model/Memorandum';
import { StavkaMemoranduma } from '../model/StavkaMemoranduma';
import { Spediter } from 'app/spediter/model/Spediter';

@Component({
  selector: 'app-izmena-memoranduma',
  templateUrl: './izmena-memoranduma.component.html',
  styleUrls: ['./izmena-memoranduma.component.scss']
})
export class IzmenaMemorandumaComponent implements OnInit {
  @Input() checkedMemorandum: Memorandum;
  @Input() memorandumi: Memorandum[];
  @Output() updateMemorandumi = new EventEmitter<Memorandum[]>();

  checkedStavkaMemoranduma: number;
  data: any;
  napomena: string;
  checkedVrstaOvlascenja: VrstaOvlascenja;
  vrsteOvlascenja: VrstaOvlascenja[];
  spediteri: Spediter[];
  selektovanSpediter: Spediter = {
    spediterID: 0,
    naziv: ' ',
    adresa: ' ',
    telefon: ' ',
    pib: ' '
  };
  stavkeMemoranduma: StavkaMemoranduma[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.postaviRedneBrojeve();
    this.allVrsteOvlascenja();
    this.popuniComboBox();
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

  public sacuvajMemorandum() {
    this.checkedMemorandum.spediter = this.selektovanSpediter;
    console.log(this.checkedMemorandum.spediter.spediterID + this.checkedMemorandum.spediter.naziv)
    this.api.putMemorandum(this.checkedMemorandum).subscribe(
      res => {
        this.checkedMemorandum = res;
        this.obnoviListu();
        alert("Memorandum je izmenjen!");
      },
      err => {
        alert("Nije moguće izmeniti memorandum!");
      }
    );
  }

  public sacuvajZakljuciMemorandum() {
    this.checkedMemorandum.status = 'Zaključen';
    console.log(this.checkedMemorandum.spediter.spediterID + this.checkedMemorandum.spediter.naziv)
    this.api.putMemorandum(this.checkedMemorandum).subscribe(
      res => {
        this.checkedMemorandum = res;
        this.obnoviListu();
        alert("Memorandum je izmenjen!");
      },
      err => {
        alert("Nije moguće izmeniti memorandum!");
      }
    );
  }

  public obnoviListu() {
    this.api.getMemorandumi().subscribe(
      res => {
        this.updateMemorandumi.emit(res);
      },
      err => {
        alert("Nije moguće pronaći memorandume!");
      }
    );
  }

  postaviSpeditera(spediter) {
    this.selektovanSpediter = spediter;
    this.checkedMemorandum.spediter = spediter;
    this.findSpediter(spediter.spediterID);
  }

  findSpediter(id: number) {

    this.api.findSpediter(id).subscribe(
      res => {
        this.selektovanSpediter = res;
      },
      err => {
        alert("Nije moguće učitati špeditere!");
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
    this.checkedMemorandum.stavkeMemoranduma.push(stavkaMemoranduma);
    this.postaviRedneBrojeve();
    this.allVrsteOvlascenja();
  }

  public postaviRedneBrojeve() {
    var redniBroj: number = 1;
    this.checkedMemorandum.stavkeMemoranduma.forEach(s => {
      s.redniBroj.redniBroj = redniBroj;
      redniBroj = redniBroj + 1;
    });
  }

  onSelect(event, i) {
    this.checkedStavkaMemoranduma = i;
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

  obrisiOdabranuStavku(stavka: StavkaMemoranduma) {
    for (let i = 0; i < this.checkedMemorandum.stavkeMemoranduma.length; ++i) {
      if (this.checkedMemorandum.stavkeMemoranduma[i].redniBroj === stavka.redniBroj) {
        this.checkedMemorandum.stavkeMemoranduma.splice(i, 1);
      }
    }
    this.postaviRedneBrojeve();
  }


}
