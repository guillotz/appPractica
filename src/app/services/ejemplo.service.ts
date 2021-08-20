import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EjemploService {
  frase: string = "Soy un servicio";
  constructor() { }

  public getFrase(){
    return this.frase;
  }
}

