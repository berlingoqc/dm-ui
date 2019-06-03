import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface RPCCallInfo {
  url: string;
  namespace: string;
  method: string;
  params: any[];
}

@Component({
  selector: 'app-rpc-request',
  templateUrl: './rpc-request.component.html',
  styleUrls: ['./rpc-request.component.sass']
})
export class RpcRequestComponent implements OnInit {
  @Output() request = new EventEmitter<RPCCallInfo>();
  model: RPCCallInfo;
  param: any;

  constructor() {
    this.model = { params: [] } as RPCCallInfo;
  }

  ngOnInit() {}

  onClickRequest() {
    event.preventDefault();
    // fait la validation que toute est chill
    this.request.next(this.model);
  }

  clear() {
    this.model = { params: [] } as RPCCallInfo;
  }

  addParam() {
    this.model.params.push(this.param);
  }
}
