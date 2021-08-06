import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routeo',
  templateUrl: './routeo.component.html',
  styleUrls: ['./routeo.component.scss']
})
export class RouteoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routerBoton(){
    this.router.navigate(['/interpolacion']);
  }

}
