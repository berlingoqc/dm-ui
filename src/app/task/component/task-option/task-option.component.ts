import { showMessagObservable } from 'src/app/utility/snackbar';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { TaskInfo, TaskRPCCall } from '../../taskrpc.service';

@Component({
  selector: 'app-task-option-bs',
  templateUrl: 'task-option.component.html'
})
export class TaskOptionBootSheet {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: TaskInfo,
    private bottomSheetRef: MatBottomSheetRef<TaskOptionBootSheet>,
    private taskRPC: TaskRPCCall
  ) {}

  deleteTaskScript() {
    showMessagObservable(this.taskRPC.DeleteTaskScript(this.data.name), d => d);
  }
}

@Component({
  selector: 'app-task-option',
  template: `
    <mat-chip (click)="openBottomSheet()"><mat-icon>more_vert</mat-icon></mat-chip>
  `,
  styleUrls: ['./task-option.component.sass']
})
export class TaskOptionComponent implements OnInit {
  @Input() task: TaskInfo;
  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit() {}

  openBottomSheet() {
    this.bottomSheet.open(TaskOptionBootSheet, {
      data: this.task
    });
  }
}
