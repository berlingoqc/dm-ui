import { PipelineRPCClient } from './../../pipeline-rpc';
import { Component, OnInit } from '@angular/core';
import { Pipeline } from '../../pipeline-rpc';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-edit-pipeline',
  templateUrl: './edit-pipeline.component.html',
  styleUrls: ['./edit-pipeline.component.sass']
})
export class EditPipelineComponent implements OnInit {
  pipeline: Pipeline;
  constructor(private route: ActivatedRoute, private client: PipelineRPCClient) {
    this.route.queryParams.subscribe(params => {
      this.client.GetPipeline(params['id']).subscribe(data => {
        this.pipeline = data[0];
      });
    });
  }

  ngOnInit() {}
}
