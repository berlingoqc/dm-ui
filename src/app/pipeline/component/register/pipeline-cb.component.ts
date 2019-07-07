import { OnInit, Input, Component, Output, EventEmitter } from '@angular/core';
import { Pipeline, PipelineRPCClient } from '../../pipeline-rpc';

@Component({
  selector: 'app-pipeline-select',
  template: `
    <mat-form-field>
      <mat-label>Register pipeline</mat-label>
      <select matNativeControl [(ngModel)]="id" (change)="change()" required>
        <option *ngFor="let pipeline of pipelines" value="{{ pipeline.id }}">{{ pipeline.id }}</option>
      </select>
    </mat-form-field>
  `
})
export class PipelineSelectComponent implements OnInit {
  pipelines: Pipeline[];
  id: string;

  @Output() onChange: EventEmitter<Pipeline> = new EventEmitter();

  constructor(private client: PipelineRPCClient) {}

  ngOnInit() {
    this.client.GetPipelines().subscribe((data: any) => {
      this.pipelines = Object.values(data[0]).map((x: Pipeline) => x);
    });
  }

  change() {
    this.onChange.emit(this.pipelines.find(x => x.id == this.id));
  }
}
