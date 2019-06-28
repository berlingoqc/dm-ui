import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPipelineComponent } from './form-pipeline.component';

describe('FormPipelineComponent', () => {
  let component: FormPipelineComponent;
  let fixture: ComponentFixture<FormPipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
