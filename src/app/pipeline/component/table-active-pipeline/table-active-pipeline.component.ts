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
  displayColumns = ['pipeline', 'file', 'status', 'running', 'more'];

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
    this.subscription = this.client.GetActives().subscribe(this.handlerSocket);
  }

  handlerSocket(data: ActivePipelineStatus[]) {
    this.active = data;
    console.log(this.active);
  }
}
