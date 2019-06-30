import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Aria2Component } from './aria2/aria2.component';
import { SettingsComponent } from './component/settings/settings.component';

const routes: Routes = [
  {
    path: 'aria2',
    component: Aria2Component
  },
  {
    path: 'aria2setting',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Aria2RoutingModule {}
