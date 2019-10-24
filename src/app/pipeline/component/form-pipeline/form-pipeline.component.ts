import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Pipeline, TaskNode, PipelineRPCClient, Variable } from './../../pipeline-rpc';
import { Component, OnInit, Inject, Injectable, Input } from '@angular/core';
import { showMessagObservable } from 'src/app/utility/snackbar';
import { Pipe } from '@angular/compiler/src/core';

@Component({
  selector: 'app-form-variables',
  template: `
    <div *ngFor="let v of list; index as i">
      <div *ngIf="v">
        <mat-form-field>
          <input matInput [(ngModel)]="v.name" placeholder="Name" />
        </mat-form-field>
        <mat-chip (click)="deleteVariable(i)">
          <mat-icon>delete</mat-icon>
        </mat-chip>
      </div>
      <button mat-button *ngIf="v == null" (click)="addVariable()">Add</button>
    </div>
  `
})
export class FormVariablesComponent implements OnInit {
  @Input() list: Variable[];

  ngOnInit() {
    this.list.push(null);
  }

  addVariable() {
    this.list[this.list.length - 1] = {} as Variable;
    this.list.push(null);
  }
  deleteVariable(index: number) {
    this.list.splice(index, 1);
  }
}

@Component({
  selector: 'app-form-pipeline',
  templateUrl: './form-pipeline.component.html',
  styleUrls: ['./form-pipeline.component.sass']
})
export class FormPipelineComponent implements OnInit {
  @Input() mode: 'edit' | 'create' = 'create';
  @Input() pipeline: Pipeline = {
    node: {} as TaskNode,
    id: '',
    name: '',
    variables: []
  };
  constructor(private client: PipelineRPCClient) {
    if (this.pipeline == null) {
      this.onResetPipeline();
    }
  }

  ngOnInit() {}

  onCreatePipeline() {
    if (this.pipeline.id == '') {
      return;
    }
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
