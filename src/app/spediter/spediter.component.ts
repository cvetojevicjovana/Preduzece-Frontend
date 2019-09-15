import { Component, OnInit, Input, Output } from '@angular/core';
import { ApiService } from 'app/shared/api.service';
import { Spediter } from './model/Spediter';
import { Router } from '@angular/router';


@Component({
  selector: 'app-spediter',
  templateUrl: './spediter.component.html',
  styleUrls: ['./spediter.component.scss']
})
export class SpediterComponent implements OnInit {

  spediteri: Spediter[];
  checkedSpediter: Spediter;
  id: 0;
  naziv: null;
  adresa: null;
  telefon: null;
  pib: null;
  updateSpediteri: Spediter[];
  openUnosSpediteraBOOL = false;
  openPrikazSpediteraBOOL = false;
  openIzmenaSpediteraBOOL = false;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.allSpediteri();
  }

  searchSpediteri() {
    this.resetujVrednosti();
    this.api.serachSpediter(this.id, this.naziv, this.adresa, this.telefon, this.pib).subscribe(
      res => {
        this.spediteri = res;
      },
      err => {
        alert("Nije moguće pronaći špeditere!");
      }
    );
    this.resetujPolja();
  }

  public allSpediteri() {
    this.api.getSpediteri().subscribe(
      res => {
        this.spediteri = res;
      },
      err => {
        alert("Nije moguće pronaći špeditere!");
      }
    );
  }

  onSelect(event, index) {
    this.checkedSpediter = this.spediteri[index];
}

  cekiranSpediter(spediter: Spediter) {
    this.checkedSpediter = spediter;
  }

  deleteSpediter(){
    this.api.deleteSpediter(this.checkedSpediter.spediterID).subscribe(
      res => {
        alert("Špediter je obrisan!");
        this.allSpediteri();
      },
      err => {
        alert("Špediter ne može da se obriše!");
      }
    );
  }

  newSpediteri(spediteri: Spediter[]){
    this.updateSpediteri = spediteri;
    this.spediteri = this.updateSpediteri;
  }

  resetujPolja() {
    this.id = null;
    this.naziv = null;
    this.adresa = null;
    this.telefon = null;
    this.pib = null;
  }

  openUnosSpeditera() {
    this.openIzmenaSpediteraBOOL = false;
    this.openPrikazSpediteraBOOL = false;
    this.openUnosSpediteraBOOL = true;
  }

  openPrikazSpeditera() {
    this.openIzmenaSpediteraBOOL = false;
    this.openUnosSpediteraBOOL = false;
    this.openPrikazSpediteraBOOL = true;
    this.allSpediteri();
  }

  openIzmenaSpeditera() {
    this.openPrikazSpediteraBOOL = false;
    this.openUnosSpediteraBOOL = false;
    this.openIzmenaSpediteraBOOL = true;
  }

  resetujVrednosti() {
    id: undefined;
    naziv: undefined;
    adresa: undefined;
    telefon: undefined;
    pib: undefined;
  }


}
