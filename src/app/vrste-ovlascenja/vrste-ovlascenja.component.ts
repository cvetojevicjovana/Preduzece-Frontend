import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from 'app/shared/api.service';
import { VrstaOvlascenja } from './model/VrstaOvlascenja';

@Component({
  selector: 'app-vrste-ovlascenja',
  templateUrl: './vrste-ovlascenja.component.html',
  styleUrls: ['./vrste-ovlascenja.component.scss']
})
export class VrsteOvlascenjaComponent implements OnInit {
  @Input() vrsteOvlascenja: VrstaOvlascenja[];
  @Output() checkedVrstaOvlascenja = new EventEmitter<VrstaOvlascenja>();

  vrstaOvlascenja: VrstaOvlascenja = {
    id: 0,
    opis: ''
  };

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  onSelect(event, i) {
    this.checkedVrstaOvlascenja.emit(this.vrsteOvlascenja[i]);
  }

}



