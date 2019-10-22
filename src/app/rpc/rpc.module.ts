import { BottomOptionWSComponent, WsStatusComponent } from './component/ws-status/ws-status.component';

import { CallInfoComponent } from './component/call-info/call-info.component';
import { CallOutputComponent } from './component/call-output/call-output.component';
import { ClientSettingsComponent } from './component/client-settings/client-settings.component';
import { CommonModule } from '@angular/common';
import { CustomRequestComponent } from './component/custom-request/custom-request.component';
import { MatModule } from './../mat/mat.module';
import { NgModule } from '@angular/core';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { ProxyWSRPC } from './rpc-client.service';
import { ProxyWsItemComponent } from './component/proxy-ws-item/proxy-ws-item.component';
import { ProxyWsListComponent } from './component/proxy-ws-list/proxy-ws-list.component';
import { RPCUiRoutingModule } from './route/routing.module';
import { RpcRequestComponent } from './component/rpc-request/rpc-request.component';
import { RpcUiComponent } from './component/rpc-ui/rpc-ui.component';

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
  providers: [ProxyWSRPC, PrettyJsonModule],
  entryComponents: [BottomOptionWSComponent]
})
export class RpcModule {}
