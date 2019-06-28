import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRegisterPipelineComponent } from './table-register-pipeline.component';

describe('TableRegisterPipelineComponent', () => {
  let component: TableRegisterPipelineComponent;
  let fixture: ComponentFixture<TableRegisterPipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRegisterPipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRegisterPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
