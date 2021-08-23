import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private frase: string = "Soy el producto service";
  constructor() { }

  devolverFrase() {
    return this.frase;
  }
  modificarFrase(texto: string) {
    this.frase = texto;
  }
}
