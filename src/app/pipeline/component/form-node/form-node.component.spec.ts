import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNodeComponent } from './form-node.component';

describe('FormNodeComponent', () => {
  let component: FormNodeComponent;
  let fixture: ComponentFixture<FormNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
