import { Component, OnInit, Input } from '@angular/core';
import { Spediter } from '../model/Spediter';

@Component({
  selector: 'app-prikaz-speditera',
  templateUrl: './prikaz-speditera.component.html',
  styleUrls: ['./prikaz-speditera.component.scss']
})
export class PrikazSpediteraComponent implements OnInit {
  @Input() checkedSpediter: Spediter;
  constructor() { }

  ngOnInit() {
  }

}
