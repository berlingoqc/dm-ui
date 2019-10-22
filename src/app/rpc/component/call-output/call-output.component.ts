import { Component, Input, OnInit } from '@angular/core';

import { RPCCall } from 'ngx-jsonrpc';

@Component({
  selector: 'app-call-output',
  templateUrl: './call-output.component.html',
  styleUrls: ['./call-output.component.sass']
})
export class CallOutputComponent implements OnInit {
  @Input() lastRequest: RPCCall;
  @Input() lastResponse: RPCCall;
  @Input() output: any;

  constructor() {}

  ngOnInit() {}
}
