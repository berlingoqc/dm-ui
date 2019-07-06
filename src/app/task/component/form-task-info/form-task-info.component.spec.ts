import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTaskInfoComponent } from './form-task-info.component';

describe('FormTaskInfoComponent', () => {
  let component: FormTaskInfoComponent;
  let fixture: ComponentFixture<FormTaskInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTaskInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTaskInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
