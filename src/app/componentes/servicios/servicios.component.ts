import { Component, OnInit } from '@angular/core';
import { EjemploService } from 'src/app/services/ejemplo.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  variable: String;

  constructor(private ejemploService: EjemploService) { }

  ngOnInit(): void {
    this.variable = this.ejemploService.frase;
  }

}
