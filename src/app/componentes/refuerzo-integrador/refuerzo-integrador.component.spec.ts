import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefuerzoIntegradorComponent } from './refuerzo-integrador.component';

describe('RefuerzoIntegradorComponent', () => {
  let component: RefuerzoIntegradorComponent;
  let fixture: ComponentFixture<RefuerzoIntegradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefuerzoIntegradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefuerzoIntegradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
