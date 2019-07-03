import { DmDashboardComponent } from './component/dashboard/dashboard.component';
import { DmComponent } from './dm/dm.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dm',
    component: DmComponent,
    children: [
      {
        path: '',
        component: DmDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DmRoutingModule {}
