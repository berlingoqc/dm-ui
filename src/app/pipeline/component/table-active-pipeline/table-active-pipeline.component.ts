import { PipelineRPCClient, PipelineWS } from './../../pipeline-rpc';
import { Component, OnInit } from '@angular/core';
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
    this.update();

    this.socket.onPipelineActiveUpdate().subscribe(() => {
      console.log('onActivePipelineUpdate');
      this.update();
    });
    this.socket.onPipelineStart().subscribe(() => {
      console.log('onPipelineStart');
    });
    this.socket.onPipelineEnd().subscribe(() => {
      console.log('onPipelineEnd');
    });
    this.socket.onTaskUpdate().subscribe(() => {
      console.log('onTaskUpdate');
    });
  }

  update() {
    this.subscription = this.client.GetActives().subscribe((d: any) => {
      this.active = Object.values(d[0]);
      console.log(d);
    });
  }

  handlerSocket(data: any) {
    this.active = data[0];
    console.log(this.active);
  }
}
