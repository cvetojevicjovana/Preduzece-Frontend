import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'app/shared/api.service';
import { Spediter } from '../model/Spediter';

@Component({
  selector: 'app-unos-speditera',
  templateUrl: './unos-speditera.component.html',
  styleUrls: ['./unos-speditera.component.scss']
})
export class UnosSpediteraComponent implements OnInit {

  spediter: Spediter = {
    spediterID: 0,
    naziv: '',
    adresa: '',
    pib: '',
    telefon: ''
  };

  constructor(private api: ApiService) { }
  @Input() spediteri: Spediter[];
  @Output() updateSpediteri = new EventEmitter<Spediter[]>();

  ngOnInit() {
  }


  public saveSpediter() {
    this.api.saveSpediter(this.spediter).subscribe(
      res => {
        alert("Špediter je sačuvan!");
        this.spediteri.push(res);
        this.updateSpediteri.emit(this.spediteri);
      },
      err => {
        alert("Nije moguće sačuvati špeditera!");
      }
    );
    this.resetujPolja();
  }

  resetujPolja() {
    this.spediter.spediterID = null;
    this.spediter.naziv = null;
    this.spediter.adresa = null;
    this.spediter.telefon = null;
    this.spediter.pib = null;
  }

}

