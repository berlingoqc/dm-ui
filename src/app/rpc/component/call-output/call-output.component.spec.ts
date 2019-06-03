import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallOutputComponent } from './call-output.component';

describe('CallOutputComponent', () => {
  let component: CallOutputComponent;
  let fixture: ComponentFixture<CallOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
