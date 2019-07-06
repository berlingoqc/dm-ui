import { MatModule } from './../mat/mat.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormNodeComponent } from './component/form-node/form-node.component';
import { FormPipelineComponent, FormPipelineDialog } from './component/form-pipeline/form-pipeline.component';
import { TablePipelineComponent } from './component/table-pipeline/table-pipeline.component';
import { PipelineComponent } from './component/pipeline/pipeline.component';
import { PipelineRoutingModule } from './pipeline-routing.module';
import { TaskModule } from '../task/task.module';
import { PipelineRPCClient, TrRPCClient } from './pipeline-rpc';
import { RegisterComponent } from './component/register/register.component';
import { TableActivePipelineComponent } from './component/table-active-pipeline/table-active-pipeline.component';
import { TableRegisterPipelineComponent } from './component/table-register-pipeline/table-register-pipeline.component';
import {
  RegisterStandaloneComponent,
  RegisterButton
} from './component/register-standalone/register-standalone.component';
import { EditPipelineComponent } from './component/edit-pipeline/edit-pipeline.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UtilityModule } from '../utility/utility.module';
import { PipelineCanvasComponent } from './component/pipeline-canvas/pipeline-canvas.component';

@NgModule({
  declarations: [
    FormNodeComponent,
    FormPipelineComponent,
    FormPipelineDialog,
    TablePipelineComponent,
    PipelineComponent,
    RegisterComponent,
    TableActivePipelineComponent,
    TableRegisterPipelineComponent,
    RegisterStandaloneComponent,
    RegisterButton,
    EditPipelineComponent,
    DashboardComponent,
    PipelineCanvasComponent
  ],
  imports: [CommonModule, TaskModule, PipelineRoutingModule, MatModule, UtilityModule],
  providers: [PipelineRPCClient, TrRPCClient],
  entryComponents: [RegisterStandaloneComponent, FormPipelineDialog],
  exports: [RegisterComponent, RegisterButton]
})
export class PipelineModule {}
