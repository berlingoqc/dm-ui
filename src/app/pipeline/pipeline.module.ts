import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormNodeComponent } from './component/form-node/form-node.component';
import { FormPipelineComponent } from './component/form-pipeline/form-pipeline.component';
import { TablePipelineComponent } from './component/table-pipeline/table-pipeline.component';
import { PipelineComponent } from './component/pipeline/pipeline.component';
import { PipelineRoutingModule } from './pipeline-routing.module';

@NgModule({
  declarations: [FormNodeComponent, FormPipelineComponent, TablePipelineComponent, PipelineComponent],
  imports: [CommonModule, PipelineRoutingModule]
})
export class PipelineModule {}
