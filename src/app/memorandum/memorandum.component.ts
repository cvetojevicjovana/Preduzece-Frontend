import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/shared/api.service';
import { Spediter } from 'app/spediter/model/Spediter';
import { Memorandum } from './model/Memorandum';

@Component({
  selector: 'app-memorandum',
  templateUrl: './memorandum.component.html',
  styleUrls: ['./memorandum.component.scss']
})
export class MemorandumComponent implements OnInit {

  statusi = ['U pripremi', 'Zaključen'];
  id: 0;
  datumOd: null;
  spediter: Spediter = new Spediter();
  status: null;
  memorandumi: Memorandum[];
  checkedMemorandum: Memorandum;
  updateMemorandumi: Memorandum[];
  unosMemorandumaBOOL = false;
  prikazMemorandumaBOOL = false;
  izmenaMemorandumaBOOL = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.allMemorandumi();
  }

  searchMemorandum() {
    this.resetujVrednosti();
    this.api.searchMemorandum(this.id, this.datumOd, this.spediter.naziv, this.status).subscribe(
      res => {
        this.memorandumi = res;
      },
      err => {
        alert("Nije moguće pronaći memorandume!");
      }
    );
    this.resetujPolja();
  }

  public allMemorandumi() {
    this.api.getMemorandumi().subscribe(
      res => {
        this.memorandumi = res;
      },
      err => {
        alert("Nije moguće pronaći memorandume!");
      }
    );
  }

  onSelect(event, index) {
    this.checkedMemorandum = this.memorandumi[index];
  }

  cekiranMemorandum(memorandum: Memorandum) {
    this.checkedMemorandum = memorandum;
  }

  newMemorandumi(memorandumi: Memorandum[]) {
    this.updateMemorandumi = memorandumi;
    this.memorandumi = this.updateMemorandumi;
  }

  deleteMemorandum() {
    this.api.deleteMemorandum(this.checkedMemorandum.memorandumID).subscribe(
      res => {
        alert("Memorandum je obrisan!");
        this.allMemorandumi();
      },
      err => {
        alert("Memorandum ne može da se obriše!");
      }
    );
  }

  zakljuciMemorandum() {
    this.checkedMemorandum.status = 'Zaključen';
    this.api.putMemorandum(this.checkedMemorandum).subscribe(
      res => {
        alert("Memorandum je zaključen!");
        this.allMemorandumi();
      },
      err => {
        alert("Memorandum ne može da se zaključi!");
      }
    );

  }

  resetujPolja() {
    this.id = null;
    this.spediter = new Spediter();
    this.datumOd = null;
    this.status = null;
  }

  openUnosMemoranduma() {
    this.prikazMemorandumaBOOL = false;
    this.izmenaMemorandumaBOOL = false;
    this.unosMemorandumaBOOL = true;
  }

  openPrikazMemoranduma() {
    this.unosMemorandumaBOOL = false;
    this.izmenaMemorandumaBOOL = false;
    this.prikazMemorandumaBOOL = true;
    this.allMemorandumi();
  }

  openIzmenaMemoranduma() {
    this.prikazMemorandumaBOOL = false;
    this.unosMemorandumaBOOL = false;
    this.izmenaMemorandumaBOOL = true;
  }

  resetujVrednosti() {
    id: undefined;
    datumOd: undefined;
    spediter: undefined;
    status: undefined;
  }


}
