import { DmDashboardComponent } from './component/dashboard/dashboard.component';
import { DmRoutingModule } from './dm-routing.module';
import { DmComponent } from './dm/dm.component';
import { NgModule } from '@angular/core';
import { MatModule } from './../mat/mat.module';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { RpcModule } from '../rpc/rpc.module';
import { RunnerModule } from '../runner/runner.module';

@NgModule({
  declarations: [SideNavComponent, DmComponent, DmDashboardComponent],
  exports: [SideNavComponent],
  imports: [CommonModule, MatModule, RpcModule, RunnerModule, DmRoutingModule],
  providers: []
})
export class DmModule {}
