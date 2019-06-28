import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, ViewChild, Inject, Input } from '@angular/core';
import { PipelineRPCClient } from '../../pipeline-rpc';
import { RegisterComponent } from '../register/register.component';
import { showMessagObservable } from 'src/app/utility/snackbar';

class StandaloneData {
  provider: string;
  data: any;
}

@Component({
  selector: 'app-register-standalone',
  template: `
    <div>
      <app-register [wanna]="true"></app-register>
      <button mat-button (click)="register()">Register</button>
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
    showMessagObservable(this.registerComponent.register(this.data.provider, this.data.data), d => d);
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-register-button',
  template: `
    <button mat-button (click)="openDialog()">Register</button>
  `
})
export class RegisterButton implements OnInit {
  @Input() data: StandaloneData;

  constructor(public dialog: MatDialog, public client: PipelineRPCClient) {}

  ngOnInit() {
    //this.client.GetRegister().subscribe(data => {});
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterStandaloneComponent, { data: this.data });
  }
}
