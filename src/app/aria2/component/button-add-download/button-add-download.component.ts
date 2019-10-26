import { Component, Input, OnInit } from '@angular/core';

import { DialogAddDownloadComponent } from '../dialog-add-download/dialog-add-download.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-button-add-download',
  template: '<mat-chip><mat-icon (click)="onDownload()">add</mat-icon></mat-chip>'
})
export class ButtonAddDownloadComponent implements OnInit {

  @Input() url: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  onDownload() {
    const dialogRef = this.dialog.open(DialogAddDownloadComponent, {
      width: '400',
      height: '600',
      data: {
        url: this.url
      }
    });
  }
}
