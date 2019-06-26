import { TaskInfo } from './../../taskrpc.service';
import { Component, OnInit } from '@angular/core';
import { TaskRPCCall } from '../../taskrpc.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html'
})
export class TaskPageComponent implements OnInit {
  task: TaskInfo[] = [];
  constructor(private taskRpc: TaskRPCCall) {}

  ngOnInit() {
    this.taskRpc.GetTasks().subscribe((task: any[]) => {
      this.task = task[0];
      console.log(this.task);
    });
  }
}
