import { FileExplorerComponent } from './fileexplorer/fileexplorer.component';
import { FileTableComponent } from './fileexplorer/file-table/file-table.component';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TaskPageComponent } from './task/page/task-page/task-page.component';
import { BackendSettingsComponent } from './settings/component/backend-settings/backend-settings.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'file',
    component: FileExplorerComponent
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
