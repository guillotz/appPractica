import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/clases/jugador.model';
import { jugadores } from '../../utiles/jugadores';

@Component({
  selector: 'app-refuerzo-integrador',
  templateUrl: './refuerzo-integrador.component.html',
  styleUrls: ['./refuerzo-integrador.component.scss']
})
export class RefuerzoIntegradorComponent implements OnInit {

  listaJugadores: any[] = jugadores;
  titulos: string[] = ["Nombre","Apellido", "Dorsal", "Division", "Acciones"];
  constructor() { }

  ngOnInit(): void {
  }

}
