import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
  MatSnackBarModule,
  MatCardModule,
  MatTreeModule,
  MatListModule,
  MatSidenavModule,
  MatTooltipModule,
  MatToolbarModule,
  MatBottomSheetModule,
  MatSelectModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [],
  imports: MAT_MODULE,
  exports: MAT_MODULE
})
export class MatModule {}
