import { DmDashboardComponent } from './component/dashboard/dashboard.component';
import { DmRoutingModule } from './dm-routing.module';
import { DmComponent } from './dm/dm.component';
import { NgModule } from '@angular/core';
import { MatModule } from './../mat/mat.module';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { RpcModule } from '../rpc/rpc.module';
import { RunnerModule } from '../runner/runner.module';
import { LoginBackendComponent } from './component/login-backend/login-backend.component';

@NgModule({
  declarations: [SideNavComponent, DmComponent, DmDashboardComponent, LoginBackendComponent],
  exports: [SideNavComponent, LoginBackendComponent],
  imports: [CommonModule, MatModule, RpcModule, RunnerModule, DmRoutingModule],
  providers: []
})
export class DmModule {}
