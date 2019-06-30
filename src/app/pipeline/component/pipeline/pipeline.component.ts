import { FormPipelineDialog } from './../form-pipeline/form-pipeline.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.sass']
})
export class PipelineComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  createPipeline() {
    const dialogRef = this.dialog.open(FormPipelineDialog, { data: {} });
  }
}
