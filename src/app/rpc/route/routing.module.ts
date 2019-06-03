import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RpcUiComponent } from '../component/rpc-ui/rpc-ui.component';

const MODULES_ROUTE: Routes = [
  {
    path: 'rpcui',
    component: RpcUiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(MODULES_ROUTE)],
  exports: [RouterModule]
})
export class RPCUiRoutingModule {}
