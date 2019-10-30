import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild, Injectable, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { PipelineRPCClient, TriggerRPC, WatchInfo, WatchSettings, AddEvent } from '../../pipeline-rpc';

import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-register-standalone',
  template: `
    <div>
      <app-register [wanna]="true"></app-register>
      <button mat-button (click)="register()">Add</button>
    </div>
  `,
  styleUrls: ['./register-standalone.component.sass']
})
export class RegisterStandaloneComponent implements OnInit {
  constructor(
    private client: TriggerRPC,
    public dialogRef: MatDialogRef<RegisterStandaloneComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('IN DATA ' + data);
  }

  @ViewChild(RegisterComponent, { static: true }) registerComponent: RegisterComponent;

  ngOnInit() { }

  register() {
    this.data.info.settings = {
      data: this.registerComponent.variables,
      pipeline_id: this.registerComponent.pipeline.id,
      remove_after_run: true,
    };
    this.client.AddEvent(this.data).subscribe(x => {
      this.dialogRef.close();
    });
  }
}

@Component({
  selector: 'app-register-button',
  template: `
    <mat-chip (click)="openDialog()">
      <mat-icon>timeline</mat-icon>
    </mat-chip>
  `
})
export class RegisterButton implements OnInit {

  @Input() watchInfo: AddEvent;

  @Output() receiveData = new EventEmitter<WatchSettings>(true);

  constructor(public dialog: MatDialog, public client: PipelineRPCClient) { }

  ngOnInit() { }

  openDialog(): void {
    console.log(this.watchInfo);
    const dialogRef = this.dialog.open(RegisterStandaloneComponent, { data: this.watchInfo });
  }
}
