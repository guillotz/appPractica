import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  frases: string[] = ["Hola mundo!", "Chau Mundo!", "Bienvenido!"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
