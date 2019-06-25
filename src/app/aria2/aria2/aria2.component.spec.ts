import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aria2Component } from './aria2.component';

describe('Aria2Component', () => {
  let component: Aria2Component;
  let fixture: ComponentFixture<Aria2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aria2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aria2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
