import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.scss']
})
export class InterpolacionComponent implements OnInit {

  nombre: string = "Guillermo";
  servicio: string;
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {

  }

  mostrarInfoServicio(){
    this.servicio = this.productoService.devolverFrase();
  }

}
