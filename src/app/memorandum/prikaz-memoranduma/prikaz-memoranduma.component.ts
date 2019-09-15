import { Component, OnInit, Input } from '@angular/core';
import { Memorandum } from '../model/Memorandum';

@Component({
  selector: 'app-prikaz-memoranduma',
  templateUrl: './prikaz-memoranduma.component.html',
  styleUrls: ['./prikaz-memoranduma.component.scss']
})
export class PrikazMemorandumaComponent implements OnInit {
  @Input() checkedMemorandum: Memorandum;

  constructor() { }

  ngOnInit() {
  }

}
