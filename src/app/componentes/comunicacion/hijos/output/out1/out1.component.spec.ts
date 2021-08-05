import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Out1Component } from './out1.component';

describe('Out1Component', () => {
  let component: Out1Component;
  let fixture: ComponentFixture<Out1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Out1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Out1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
