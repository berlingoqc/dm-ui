import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineCanvasComponent } from './pipeline-canvas.component';

describe('PipelineCanvasComponent', () => {
  let component: PipelineCanvasComponent;
  let fixture: ComponentFixture<PipelineCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
