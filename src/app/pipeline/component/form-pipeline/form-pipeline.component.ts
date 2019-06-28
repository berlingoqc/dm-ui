import { Pipeline, TaskNode, PipelineRPCClient } from './../../pipeline-rpc';
import { Component, OnInit } from '@angular/core';
import { pipe } from '@angular/core/src/render3';
import { showMessagObservable } from 'src/app/utility/snackbar';

@Component({
  selector: 'app-form-pipeline',
  templateUrl: './form-pipeline.component.html',
  styleUrls: ['./form-pipeline.component.sass']
})
export class FormPipelineComponent implements OnInit {
  pipeline: Pipeline = { node: {} as TaskNode } as Pipeline;
  constructor(private client: PipelineRPCClient) {}

  ngOnInit() {}

  onCreatePipeline() {
    console.log(this.pipeline);
    // validation
    showMessagObservable(this.client.Create(this.pipeline), () => 'Pipeline created');
  }

  onResetPipeline() {
    this.pipeline = { node: {} as TaskNode } as Pipeline;
  }
}
