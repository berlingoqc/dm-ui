import { NgModule } from '@angular/core';
import { FormInterpretorTaskComponent } from './component/form-interpretor-task/form-interpretor-task.component';
import { Routes, RouterModule } from '@angular/router';
import { TaskPageComponent } from './page/task-page/task-page.component';
import { TaskListComponent } from './component/task-list/task-list.component';

const routes: Routes = [
  {
    path: 'task',
    component: TaskPageComponent,
    children: [
      {
        path: '',
        component: TaskListComponent
      },
      {
        path: 'new/interpretor',
        component: FormInterpretorTaskComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {}
