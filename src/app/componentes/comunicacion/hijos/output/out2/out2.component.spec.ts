import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Out2Component } from './out2.component';

describe('Out2Component', () => {
  let component: Out2Component;
  let fixture: ComponentFixture<Out2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Out2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Out2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
