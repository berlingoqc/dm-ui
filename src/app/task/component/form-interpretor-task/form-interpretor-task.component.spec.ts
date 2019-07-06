import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInterpretorTaskComponent } from './form-interpretor-task.component';

describe('FormInterpretorTaskComponent', () => {
  let component: FormInterpretorTaskComponent;
  let fixture: ComponentFixture<FormInterpretorTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInterpretorTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInterpretorTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
