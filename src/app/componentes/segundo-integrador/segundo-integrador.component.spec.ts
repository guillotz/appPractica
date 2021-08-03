import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoIntegradorComponent } from './segundo-integrador.component';

describe('SegundoIntegradorComponent', () => {
  let component: SegundoIntegradorComponent;
  let fixture: ComponentFixture<SegundoIntegradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoIntegradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoIntegradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
