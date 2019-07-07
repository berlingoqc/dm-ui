import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, ViewChild, Inject, Input } from '@angular/core';
import { PipelineRPCClient } from '../../pipeline-rpc';
import { RegisterComponent } from '../register/register.component';
import { showMessagObservable } from 'src/app/utility/snackbar';

class StandaloneData {
  mode: 'register' | 'active';
  file: string;
  provider: string;
  data: any;
}

@Component({
  selector: 'app-register-standalone',
  template: `
    <div>
      <h4>{{ data.file }}</h4>
      <app-register [wanna]="true"></app-register>
      <button mat-button (click)="register()">Add</button>
    </div>
  `,
  styleUrls: ['./register-standalone.component.sass']
})
export class RegisterStandaloneComponent implements OnInit {
  constructor(
    private client: PipelineRPCClient,
    public dialogRef: MatDialogRef<RegisterStandaloneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StandaloneData
  ) {}

  @ViewChild(RegisterComponent) registerComponent: RegisterComponent;

  ngOnInit() {}

  register() {
    if (this.data.mode == 'active') {
      showMessagObservable(this.registerComponent.active(this.data.file), x => x);
    } else {
      showMessagObservable(this.registerComponent.register(this.data.provider, this.data.data), d => d);
    }
    this.dialogRef.close();
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
  @Input() data: StandaloneData;

  constructor(public dialog: MatDialog, public client: PipelineRPCClient) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterStandaloneComponent, { data: this.data });
  }
}
