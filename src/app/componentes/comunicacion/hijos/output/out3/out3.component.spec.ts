import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Out3Component } from './out3.component';

describe('Out3Component', () => {
  let component: Out3Component;
  let fixture: ComponentFixture<Out3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Out3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Out3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
