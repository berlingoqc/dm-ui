import { MatModule } from './../mat/mat.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RpcRequestComponent } from './component/rpc-request/rpc-request.component';
import { RPCClient, RPCSystemCall, ProxyWSRPC } from './rpc-client.service';
import { RpcUiComponent } from './component/rpc-ui/rpc-ui.component';
import { RPCUiRoutingModule } from './route/routing.module';
import { CustomRequestComponent } from './component/custom-request/custom-request.component';
import { CallInfoComponent } from './component/call-info/call-info.component';
import { CallOutputComponent } from './component/call-output/call-output.component';

import { PrettyJsonModule } from 'angular2-prettyjson';
import { RPCClientSocket } from './rpc-ws-client.service';
import { WsStatusComponent, BottomOptionWSComponent } from './component/ws-status/ws-status.component';
import { ProxyWsItemComponent } from './component/proxy-ws-item/proxy-ws-item.component';
import { ProxyWsListComponent } from './component/proxy-ws-list/proxy-ws-list.component';
import { ClientSettingsComponent } from './component/client-settings/client-settings.component';

@NgModule({
  declarations: [
    RpcRequestComponent,
    RpcUiComponent,
    CustomRequestComponent,
    CallInfoComponent,
    CallOutputComponent,
    WsStatusComponent,
    BottomOptionWSComponent,
    ProxyWsItemComponent,
    ProxyWsListComponent,
    ClientSettingsComponent
  ],
  imports: [CommonModule, MatModule, RPCUiRoutingModule],
  exports: [WsStatusComponent, BottomOptionWSComponent, ProxyWsListComponent, ClientSettingsComponent],
  providers: [RPCClient, RPCClientSocket, RPCSystemCall, ProxyWSRPC, PrettyJsonModule],
  entryComponents: [BottomOptionWSComponent]
})
export class RpcModule {}
