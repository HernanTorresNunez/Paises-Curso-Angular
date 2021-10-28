import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService 
    ) { }

  ngOnInit(): void {

    // Con Observables
    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log( id );

    //     this.paisService.getPaisPorAlpha( id )
    //       .subscribe( pais => {
    //         console.log( pais );
    //       })
    //   })

    // Con RxJS
    this.activatedRoute.params
      .pipe(
        switchMap( ( params ) => this.paisService.getPaisPorAlpha( params.id ) ),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais[0] ); // La API está devolviendo un arreglo, por lo que se usa el primer elemento
  }

}
