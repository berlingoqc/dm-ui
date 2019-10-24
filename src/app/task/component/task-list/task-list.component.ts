import { Component, OnInit } from '@angular/core';
import { TaskInfo, TaskRPCCall } from '../../taskrpc.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {
  task: TaskInfo[];
  constructor(private taskRpc: TaskRPCCall) {
    this.taskRpc.GetTasks().subscribe((task) => {
      this.task = task;
      console.log(this.task);
    });
  }

  ngOnInit() {}
}
