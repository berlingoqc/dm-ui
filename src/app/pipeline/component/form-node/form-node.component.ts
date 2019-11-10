import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskInfo, TaskRPCCall } from 'src/app/task/taskrpc.service';

import { MatSelectChange } from '@angular/material';
import { TaskNode } from '../../pipeline-rpc';

@Component({
  selector: 'app-form-node',
  templateUrl: './form-node.component.html',
  styleUrls: ['./form-node.component.sass']
})
export class FormNodeComponent implements OnInit {
  @Input() node: TaskNode;
  @Input() taskList: TaskInfo[] = null;
  @Input() level = 0;


  @Input() parentFormGroup: FormGroup;

  @Output() delete = new EventEmitter();

  selectedTask: TaskInfo;

  constructor(private task: TaskRPCCall) { }

  ngOnInit() {
    this.node.params = {};
    this.parentFormGroup.addControl('taskid', new FormControl('', Validators.required));
    if (this.taskList === null) {
      this.task.GetTasks().subscribe((data: TaskInfo[]) => {
        this.taskList = data;
        console.log(this.taskList);
      });
    }
  }

  taskSelected(task: MatSelectChange) {
    this.selectedTask = this.taskList.find(t => t.name === task.value);
    this.node.nextnode = [];
    this.selectedTask.return.forEach(r => {
      this.node.nextnode.push(null);
    });
    // Ajout form control pour la task choisit sous la form d'un formGroup
    if (this.parentFormGroup) {
      this.parentFormGroup.removeControl('node');
      this.parentFormGroup.addControl('node', new FormGroup({
        params: new FormArray(this.selectedTask.params.map(x => new FormGroup({}))),
        nextnodes: new FormArray(this.selectedTask.params.map(x => new FormGroup({})))
      }));
    }

    console.log(this.parentFormGroup);
  }


  getNodeFormGroup(): FormGroup {
    return this.parentFormGroup.controls.node as FormGroup;
  }

  getVariableFormGroup(index: number): FormGroup {
    const f = (this.parentFormGroup.controls.node as FormGroup);
    const a = (f.controls.params as FormArray);
    return a.at(index) as FormGroup;
  }

  getNextNodeFromGroup(index: number): FormGroup {
    const f = (this.parentFormGroup.controls.node as FormGroup);
    const a = (f.controls.nextnodes as FormArray);
    return a.at(index) as FormGroup;
  }

  paramChange(d) {
    this.node.params[d.field] = '' + d.data;
  }

  addTask(index: number) {
    this.node.nextnode[index] = {} as TaskNode;
  }

  deleteNode(index: number) {
    this.node.nextnode[index] = null;
    ((this.parentFormGroup.controls.node as FormGroup).controls.nextnodes as FormArray).setControl(index, new FormGroup({}));
  }
}
