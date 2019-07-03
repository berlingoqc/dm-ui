import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Pipeline, TaskNode, PipelineRPCClient } from './../../pipeline-rpc';
import { Component, OnInit, Inject, Injectable, Input } from '@angular/core';
import { pipe } from '@angular/core/src/render3';
import { showMessagObservable } from 'src/app/utility/snackbar';
import { Pipe } from '@angular/compiler/src/core';

@Component({
  selector: 'app-form-pipeline',
  templateUrl: './form-pipeline.component.html',
  styleUrls: ['./form-pipeline.component.sass']
})
export class FormPipelineComponent implements OnInit {
  @Input() mode: 'edit' | 'create';
  @Input() pipeline: Pipeline = { node: {} as TaskNode } as Pipeline;
  constructor(private client: PipelineRPCClient) {
    if (this.pipeline == null) {
      this.onResetPipeline();
    }
  }

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

@Component({
  selector: 'app-form-pipeline-dialog',
  template: `
    <app-form-pipeline></app-form-pipeline>
  `
})
export class FormPipelineDialog {
  constructor(public dialogRef: MatDialogRef<FormPipelineDialog>, @Inject(MAT_DIALOG_DATA) public data: Pipeline) {}
}
