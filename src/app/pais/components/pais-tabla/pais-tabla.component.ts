import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent implements OnInit {

  // por default es el mismo nombre (podría no colorcar 'paises')
  @Input ('paises') paises: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
