import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerIntegradorComponent } from './primer-integrador.component';

describe('PrimerIntegradorComponent', () => {
  let component: PrimerIntegradorComponent;
  let fixture: ComponentFixture<PrimerIntegradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerIntegradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerIntegradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
