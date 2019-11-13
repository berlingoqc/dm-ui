import { Component, OnInit } from '@angular/core';
import { DMContextService } from '../../context.service';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login-backend',
  templateUrl: './login-backend.component.html',
  styleUrls: ['./login-backend.component.scss']
})
export class LoginBackendComponent implements OnInit {

  constructor(public ctx: DMContextService) {}

  ngOnInit() {
  }

}

@Component({
  selector: 'app-dialog-add-backend',
  template: `
  `
})
export class DialogAddBackendComponent implements OnInit {

  constructor(private ctx: DMContextService, private dialog: MatDialogRef<DialogAddBackendComponent>) {

  }

  ngOnInit() {

  }
}
