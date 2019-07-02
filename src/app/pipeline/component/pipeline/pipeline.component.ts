import { FormPipelineDialog } from './../form-pipeline/form-pipeline.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.sass']
})
export class PipelineComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
