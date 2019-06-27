import { MatModule } from './../mat/mat.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RpcRequestComponent } from './component/rpc-request/rpc-request.component';
import { RPCClient, RPCSystemCall } from './rpc-client.service';
import { RpcUiComponent } from './component/rpc-ui/rpc-ui.component';
import { RPCUiRoutingModule } from './route/routing.module';
import { CustomRequestComponent } from './component/custom-request/custom-request.component';
import { CallInfoComponent } from './component/call-info/call-info.component';
import { CallOutputComponent } from './component/call-output/call-output.component';

import { PrettyJsonModule } from 'angular2-prettyjson';
import { RPCClientSocket } from './rpc-ws-client.service';

@NgModule({
  declarations: [RpcRequestComponent, RpcUiComponent, CustomRequestComponent, CallInfoComponent, CallOutputComponent],
  imports: [CommonModule, MatModule, RPCUiRoutingModule],
  providers: [RPCClient, RPCClientSocket, RPCSystemCall, PrettyJsonModule]
})
export class RpcModule {}
