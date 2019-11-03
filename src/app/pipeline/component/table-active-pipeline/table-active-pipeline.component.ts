import { Component, OnInit } from '@angular/core';
import { PipelineRPCClient, PipelineWS } from './../../pipeline-rpc';

import { ActivePipelineStatus } from '../../pipeline-rpc';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table-active-pipeline',
  templateUrl: './table-active-pipeline.component.html',
  styleUrls: ['./table-active-pipeline.component.sass']
})
export class TableActivePipelineComponent implements OnInit {
  active: ActivePipelineStatus[];
  displayColumns = ['status', 'pipeline', 'file', 'running', 'more'];

  subscription: Subscription;
  constructor(private client: PipelineRPCClient, private socket: PipelineWS) {}

  ngOnInit() {
    this.client.GetActives().subscribe(d => {
      this.active = Object.values(d);
    });
    this.socket.onPipelineActiveUpdate().subscribe(d => {
      console.log('onActivePipelineUpdate');
      this.active = Object.values(d);
    });
    this.socket.onPipelineStart().subscribe(d => {
      console.log('onPipelineStart');
      this.update(d);
    });
    this.socket.onPipelineEnd().subscribe(d => {
      console.log('onPipelineEnd');
      this.update(d);
    });
    this.socket.onTaskUpdate().subscribe(d => {
      console.log('onTaskUpdate');
    });
  }

  update(d: ActivePipelineStatus) {
    const i = this.active.findIndex(x => x.file == x.file);
    this.active[i] = d;
  }

  handlerSocket(data: any) {
    this.active = data[0];
    console.log(this.active);
  }
}
