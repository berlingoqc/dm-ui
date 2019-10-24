import { Component, OnInit } from '@angular/core';
import { Pipeline, PipelineRPCClient } from './../../pipeline-rpc';

import { Router } from '@angular/router';

@Component({
  selector: 'app-table-pipeline',
  templateUrl: './table-pipeline.component.html',
  styleUrls: ['./table-pipeline.component.sass']
})
export class TablePipelineComponent implements OnInit {
  pipeline: Pipeline[];
  displayColumns: string[] = ['id', 'name', 'options'];

  constructor(private client: PipelineRPCClient, private route: Router) {}

  goEdit(id: string) {
    this.route.navigate(['pipeline/edit'], { queryParams: { id } });
  }

  ngOnInit() {
    this.client.GetPipelines().subscribe(data => {
      this.pipeline = Object.values(data).map(x => {
        return x;
      });
    });
  }
}
