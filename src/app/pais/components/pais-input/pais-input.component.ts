import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  
  @Input() placeholder: string = '';
  
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  debouncer: Subject<string> = new Subject();
  
  termino: string = '';
  
  ngOnInit(): void {
    this.debouncer
    .pipe( debounceTime( 300 ) )
    .subscribe( valor => {
      this.onDebounce.emit( valor );
    })
  }

  buscar() {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada() {
    // const valor = event.target.value;
    // console.log( valor );
    // console.log( this.termino );

    this.debouncer.next( this.termino );
  }

}
