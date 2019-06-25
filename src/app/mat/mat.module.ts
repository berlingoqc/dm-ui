import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatGridListModule,
  MatTableModule,
  MatProgressBarModule,
  MatChipsModule,
  MatRadioModule,
  MatToolbarModule,
  MatDialogModule
} from '@angular/material';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const MAT_MODULE = [
  FormsModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatGridListModule,
  MatTableModule,
  MatProgressBarModule,
  MatChipsModule,
  MatRadioModule,
  MatToolbarModule,
  MatDialogModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [],
  imports: MAT_MODULE,
  exports: MAT_MODULE
})
export class MatModule {}
