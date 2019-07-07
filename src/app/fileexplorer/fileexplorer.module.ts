import { PipelineModule } from './../pipeline/pipeline.module';
import { MatModule } from './../mat/mat.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileTableComponent } from './file-table/file-table.component';
import { FileExplorerRPClient } from './fe-rpc';

@NgModule({
  declarations: [FileTableComponent],
  imports: [CommonModule, MatModule, PipelineModule],
  exports: [FileTableComponent],
  providers: [FileExplorerRPClient]
})
export class FileexplorerModule {}
