import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.scss']
})
export class Hijo1Component implements OnInit {
  @Input() propiedad;
  constructor() { }

  ngOnInit(): void {
  }

}
