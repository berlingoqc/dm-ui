import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { InterpretorTask, Params, Return, TaskInfo, TaskRPCCall } from './../../taskrpc.service';

import { Location } from '@angular/common';
import { showMessagObservable } from 'src/app/utility/snackbar';

@Component({
  selector: 'app-form-interpretor-task',
  templateUrl: './form-interpretor-task.component.html',
  styleUrls: ['./form-interpretor-task.component.sass']
})
export class FormInterpretorTaskComponent implements OnInit {
  types = ['file', 'folder'];
  result: number[];
  code: string[];
  task: InterpretorTask = {
    info: {
      params: [],
      return: []
    } as TaskInfo
  } as InterpretorTask;

  ownerForm: FormGroup;

  constructor(private location: Location, private taskClient: TaskRPCCall) {
    this.ownerForm = new FormGroup({
      description: new FormControl('', [Validators.required]),
      interpretor: new FormControl('', [Validators.required]),
      input: new FormControl('', [Validators.required]),
      params: new FormArray([]),
      return: new FormArray([])
    });
  }

  ngOnInit() {}

  hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

  onCancel = () => {
    this.location.back();
  }

  public createOwner = ownerFormValue => {
    if (this.ownerForm.valid) {
      this.executeOwnerCreation(ownerFormValue);
    }
  }

  private executeOwnerCreation(v) {
    this.task.interpretor = v.interpretor;
    this.task.info.name = this.task.file;
    this.task.info.description = v.description;
    this.task.info.params = v.params;
    this.task.info.return = v.return;
    console.log(this.task);
    showMessagObservable(this.taskClient.SaveTaskScript({ taskin: this.task, data: this.result }), d => d);
  }

  onFileSelected(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.task.file = file.name;
      reader.readAsArrayBuffer(file);

      reader.onload = () => {
        const result = new Uint8Array(reader.result as ArrayBuffer);
        this.result = [];
        result.forEach(d => {
          this.result.push(d);
        });
      };
    }
  }

  addParam() {
    const i = this.task.info.params.push({
      name: ''
    } as Params);
    (this.ownerForm.controls.params as FormArray).insert(
      i,
      new FormGroup({
        name: new FormControl('', [Validators.required, Validators.maxLength(40)]),
        description: new FormControl('', [Validators.required])
      })
    );
  }

  deleteParam(index: number) {
    this.task.info.params.splice(index, 1);
    this.removeSubItem(index, 'params');
  }

  addOutput() {
    const i = this.task.info.return.push({} as Return);
    (this.ownerForm.controls.return as FormArray).insert(
      i,
      new FormGroup({
        type: new FormControl('', [Validators.required, Validators.maxLength(40)]),
        description: new FormControl('', [Validators.required])
      })
    );
  }

  deleteOutput(index: number) {
    this.task.info.return.splice(index, 1);
    this.removeSubItem(index, 'return');
  }

  removeSubItem(i: number, control: string) {
    (this.ownerForm.controls[control] as FormArray).removeAt(i);
  }
}
function ab2str(buf: Uint8Array): string {
  return String.fromCharCode.apply(null, buf);
}
