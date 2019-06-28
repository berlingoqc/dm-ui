import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePipelineComponent } from './table-pipeline.component';

describe('TablePipelineComponent', () => {
  let component: TablePipelineComponent;
  let fixture: ComponentFixture<TablePipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
