import { Component, OnInit, Input } from '@angular/core';
import { StavkaMemoranduma } from 'app/memorandum/model/StavkaMemoranduma';

@Component({
  selector: 'app-prikaz-vrste-ovlascenja',
  templateUrl: './prikaz-vrste-ovlascenja.component.html',
  styleUrls: ['./prikaz-vrste-ovlascenja.component.scss']
})
export class PrikazVrsteOvlascenjaComponent implements OnInit {
  @Input() stavkeMemoranduma: StavkaMemoranduma[];
  constructor() { }

  ngOnInit() {
  }

}
