import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { DialogAddDownloadComponent } from '../dialog-add-download/dialog-add-download.component';

@Component({
  selector: 'app-button-add-download',
  template: '<mat-chip><mat-icon (click)="onDownload()">add</mat-icon></mat-chip>'
})
export class ButtonAddDownloadComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  onDownload() {
    const dialogRef = this.dialog.open(DialogAddDownloadComponent, {
      width: '400',
      height: '600'
    });
  }
}
