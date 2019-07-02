import { EditPipelineComponent } from './component/edit-pipeline/edit-pipeline.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipelineComponent } from './component/pipeline/pipeline.component';
import { FormPipelineComponent } from './component/form-pipeline/form-pipeline.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'pipeline',
    component: PipelineComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'edit',
        component: EditPipelineComponent
      },
      {
        path: 'new',
        component: FormPipelineComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipelineRoutingModule {}
