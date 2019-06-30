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
      this.update();
    });
  }

  update() {
    this.subscription = this.client.GetActive().subscribe(this.handlerSocket);
  }

  handlerSocket(data: ActivePipelineStatus[]) {}
}
