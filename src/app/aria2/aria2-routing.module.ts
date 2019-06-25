import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Aria2Component } from './aria2/aria2.component';

const routes: Routes = [
  {
    path: 'aria2',
    component: Aria2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Aria2RoutingModule {}
