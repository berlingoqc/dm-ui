import { Component, OnInit, Input } from '@angular/core';
import { TaskRPCCall, TaskInfo } from 'src/app/task/taskrpc.service';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-form-node',
  templateUrl: './form-node.component.html',
  styleUrls: ['./form-node.component.sass']
})
export class FormNodeComponent implements OnInit {
  @Input() taskList: TaskInfo[] = null;
  @Input() level: number = 0;

  childNode: boolean[];

  selectedTask: TaskInfo;

  constructor(private task: TaskRPCCall) {}

  ngOnInit() {
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

    this.childNode = [];
    this.selectedTask.params.forEach(() => {
      this.childNode.push(false);
    });
  }

  addTask(index: number) {
    this.childNode[index] = true;
  }
}
