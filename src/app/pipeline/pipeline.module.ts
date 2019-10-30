import {
  FormPipelineComponent,
  FormPipelineDialog,
  FormVariablesComponent
} from './component/form-pipeline/form-pipeline.component';
import { PipelineCanvasButton, PipelineCanvasComponent } from './component/pipeline-canvas/pipeline-canvas.component';
import { PipelineRPCClient, TriggerRPC } from './pipeline-rpc';
import {
  RegisterButton,
  RegisterStandaloneComponent
} from './component/register-standalone/register-standalone.component';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditPipelineComponent } from './component/edit-pipeline/edit-pipeline.component';
import { FormNodeComponent } from './component/form-node/form-node.component';
import { MatModule } from './../mat/mat.module';
import { NgModule } from '@angular/core';
import { PipelineComponent } from './component/pipeline/pipeline.component';
import { PipelineRoutingModule } from './pipeline-routing.module';
import { PipelineSelectComponent } from './component/register/pipeline-cb.component';
import { RegisterComponent } from './component/register/register.component';
import { TableActivePipelineComponent } from './component/table-active-pipeline/table-active-pipeline.component';
import { TablePipelineComponent } from './component/table-pipeline/table-pipeline.component';
import { TaskModule } from '../task/task.module';
import { UtilityModule } from '../utility/utility.module';

@NgModule({
  declarations: [
    FormNodeComponent,
    FormPipelineComponent,
    FormPipelineDialog,
    TablePipelineComponent,
    PipelineComponent,
    RegisterComponent,
    TableActivePipelineComponent,
    RegisterStandaloneComponent,
    RegisterButton,
    EditPipelineComponent,
    DashboardComponent,
    PipelineCanvasComponent,
    FormVariablesComponent,
    PipelineSelectComponent,
    PipelineCanvasButton
  ],
  imports: [CommonModule, TaskModule, PipelineRoutingModule, MatModule, UtilityModule],
  providers: [PipelineRPCClient, TriggerRPC],
  entryComponents: [RegisterStandaloneComponent, FormPipelineDialog],
  exports: [RegisterComponent, RegisterButton]
})
export class PipelineModule {}
