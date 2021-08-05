import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-out1',
  templateUrl: './out1.component.html',
  styleUrls: ['./out1.component.scss']
})
export class Out1Component implements OnInit {

  @Output() evento: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  emitirEvento(mensaje: string){
    this.evento.emit(mensaje);
  }

}
