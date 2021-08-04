import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteoComponent } from './routeo.component';

describe('RouteoComponent', () => {
  let component: RouteoComponent;
  let fixture: ComponentFixture<RouteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
