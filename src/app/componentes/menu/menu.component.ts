import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  comu: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goTo(where: string) {
    this.router.navigate([where]);
  }
  show(what: string) {
    switch (what) {
      case 'comunicacion':
        this.comu = !this.comu;
        break;
    }
  }

}
