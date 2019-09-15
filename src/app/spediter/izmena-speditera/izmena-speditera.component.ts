import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'app/shared/api.service';
import { Spediter } from '../model/Spediter';

@Component({
  selector: 'app-izmena-speditera',
  templateUrl: './izmena-speditera.component.html',
  styleUrls: ['./izmena-speditera.component.scss']
})
export class IzmenaSpediteraComponent implements OnInit {
  @Input() checkedSpediter: Spediter;
  @Input() spediteri: Spediter[];
  @Output() updateSpediteri = new EventEmitter<Spediter[]>();


  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  public putSpediter() {
    this.api.putSpediter(this.checkedSpediter).subscribe(
      res => {
        this.checkedSpediter = res;
        this.obnoviListu();
        alert("Špediter je izmenjen!");
      },
      err => {
        alert("Nije moguće izmeniti špeditera!");
      }
    );
  }

  public obnoviListu() {
    this.api.getSpediteri().subscribe(
      res => {
        this.updateSpediteri.emit(res);
      },
      err => {
        alert("Nije moguće pronaći špeditere!");
      }
    );
  }

}
