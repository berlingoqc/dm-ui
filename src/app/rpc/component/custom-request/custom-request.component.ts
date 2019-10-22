import { Component, OnInit } from '@angular/core';

import { RPCCallInfo } from '../rpc-request/rpc-request.component';
import { RPCClient } from 'ngx-jsonrpc';

@Component({
  selector: 'app-custom-request',
  templateUrl: './custom-request.component.html',
  styleUrls: ['./custom-request.component.sass']
})
export class CustomRequestComponent implements OnInit {
  output: any;

  constructor(public client: RPCClient) {}

  ngOnInit() {}

  onRequest(call: RPCCallInfo) {
    this.client.SetNamespace(call.namespace);
    this.client.settings.url = call.url;
    this.client.ExecuteCall(call.method, call.params).subscribe(e => {
      this.output = e;
    });
  }
}
