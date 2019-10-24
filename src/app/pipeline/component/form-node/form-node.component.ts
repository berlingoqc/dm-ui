import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() delete = new EventEmitter();

  selectedTask: TaskInfo;

  constructor(private task: TaskRPCCall) {}

  ngOnInit() {
    this.node.params = {};
    if (this.taskList === null) {
      this.task.GetTasks().subscribe((data: TaskInfo[]) => {
        this.taskList = data;
        console.log(this.taskList);
      });
    }
  }

  taskSelected(task: MatSelectChange) {
    this.selectedTask = this.taskList.find(t => t.name == task.value);
    this.node.nextnode = [];
    this.selectedTask.return.forEach(r => {
      this.node.nextnode.push(null);
    });
  }

  paramChange(name: string, event) {
    console.log(name, event);
    this.node.params[name] = 'dsa';
  }

  addTask(index: number) {
    this.node.nextnode[index] = {} as TaskNode;
  }

  deleteNode(index: number) {
    this.node.nextnode[index] = null;
  }
}
