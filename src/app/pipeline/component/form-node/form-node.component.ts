import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TaskRPCCall, TaskInfo } from 'src/app/task/taskrpc.service';
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
  @Input() level: number = 0;
  @Output() delete = new EventEmitter();

  selectedTask: TaskInfo;

  constructor(private task: TaskRPCCall) {}

  ngOnInit() {
    this.node.params = {};
    if (this.taskList === null) {
      this.task.GetTasks().subscribe((data: any) => {
        this.taskList = data[0] as TaskInfo[];
        console.log(this.taskList);
      });
    }
  }

  taskSelected(task: MatSelectChange) {
    this.selectedTask = this.taskList.find(t => t.name == task.value);
    console.log(this.selectedTask);

    this.node.nextnode = [];
    for (let i = 0; i < this.selectedTask.numberreturn; i++) {
      this.node.nextnode.push(null);
    }
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
