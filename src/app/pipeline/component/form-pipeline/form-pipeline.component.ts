import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Pipeline, TaskNode, PipelineRPCClient, Variable } from './../../pipeline-rpc';
import { Component, OnInit, Inject, Injectable, Input } from '@angular/core';


function isNullObject(obj: any): boolean {
  return Object.entries(obj).length === 0;
}

@Component({
  selector: 'app-form-variables',
  template: `
    <div [formGroup]="parentForm">
      <div formArrayName="variables">
        <div *ngFor="let v of list; index as i">
          <div *ngIf="v">
            <mat-form-field>
              <input matInput [formControlName]="i" placeholder="Name" />
            </mat-form-field>
            <mat-chip (click)="deleteVariable(i)">
              <mat-icon>delete</mat-icon>
            </mat-chip>
          </div>
          <button mat-button *ngIf="v == null" (click)="addVariable()">Add</button>
        </div>
      </div>
    </div>
  `
})
export class FormVariablesComponent implements OnInit {
  @Input() list: Variable[];

  @Input() parentForm: FormGroup;

  ngOnInit() {
    this.list.push(null);
    this.parentForm.addControl('variables', new FormArray([]));
  }

  addVariable() {
    this.list[this.list.length - 1] = {} as Variable;
    (this.parentForm.controls.variables as FormArray).push(new FormControl('', [Validators.required]));
    console.log(this.parentForm);
    this.list.push(null);
  }
  deleteVariable(index: number) {
    this.list.splice(index, 1);
    (this.parentForm.controls.variables as FormArray).removeAt(index);
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

  mainFormGroup: FormGroup;

  formValid = false;

  constructor(private client: PipelineRPCClient, private fb: FormBuilder, private router: Router) {
    if (this.pipeline == null) {
      this.onResetPipeline();
    }

    this.mainFormGroup = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.mainFormGroup.valueChanges.subscribe(() => {
      this.formValid = this.mainFormGroup.valid;
      console.log(this.formValid);
    });
  }

  onCreatePipeline() {
    const value = this.mainFormGroup.value;
    console.log(value);
    this.pipeline.id = value.id;
    this.pipeline.name = value.name;

    this.pipeline.variables = value.variables.map(x => {
      return {
        name: x,
        type: '',
        description: ''
      };

    });

    this.pipeline.node = {} as TaskNode;

    const nextNode = (v: any, taskNode: TaskNode): TaskNode => {
      taskNode.taskid = v.taskid;
      taskNode.params = {};
      v.node.params.forEach(x => {
        taskNode.params[x.name] = '' + x.field;
      });

      taskNode.nextnode = new Array(v.node.nextnodes.length);
      v.node.nextnodes.forEach((nn, index) => {
        if (!isNullObject(nn)) {
          taskNode.nextnode[index] = {} as TaskNode;
          nextNode(nn, taskNode.nextnode[index]);
        }
      });
      return taskNode;
    };

    nextNode(value, this.pipeline.node);
    console.log(this.pipeline);

    /*this.client.Create(this.pipeline).subscribe(x => {
      this.router.navigate(['pipeline/']);
    }, err => {
      console.log(err);
    });
    */
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
  constructor(public dialogRef: MatDialogRef<FormPipelineDialog>, @Inject(MAT_DIALOG_DATA) public data: Pipeline) { }
}
