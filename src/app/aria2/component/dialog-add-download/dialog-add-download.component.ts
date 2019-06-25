import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-add-download',
  templateUrl: './dialog-add-download.component.html',
  styleUrls: ['./dialog-add-download.component.sass']
})
export class DialogAddDownloadComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogAddDownloadComponent>) {}

  ngOnInit() {}
}
