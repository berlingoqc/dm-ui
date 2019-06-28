import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableActivePipelineComponent } from './table-active-pipeline.component';

describe('TableActivePipelineComponent', () => {
  let component: TableActivePipelineComponent;
  let fixture: ComponentFixture<TableActivePipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableActivePipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableActivePipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
