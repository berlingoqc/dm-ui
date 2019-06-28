import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './ydl-ui/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { TaskPageComponent } from './task/page/task-page/task-page.component';
import { BackendSettingsComponent } from './settings/component/backend-settings/backend-settings.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'task',
    component: TaskPageComponent
  },
  {
    path: 'setting',
    component: BackendSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
