import { AddDownloadComponent } from './component/add-download/add-download.component';
import { Aria2Component } from './aria2/aria2.component';
import { Aria2RPCCall } from './aria2rpc.service';
import { Aria2RoutingModule } from './aria2-routing.module';
import { ButtonAddDownloadComponent } from './component/button-add-download/button-add-download.component';
import { CommonModule } from '@angular/common';
import { DialogAddDownloadComponent } from './component/dialog-add-download/dialog-add-download.component';
import { MatModule } from './../mat/mat.module';
import { NgModule } from '@angular/core';
import { PipelineModule } from '../pipeline/pipeline.module';
import { QueueComponent } from './component/queue/queue.component';
import { SettingsComponent } from './component/settings/settings.component';
import { StatComponent } from './component/stat/stat.component';
import { VersionComponent } from './component/version/version.component';

@NgModule({
  declarations: [
    AddDownloadComponent,
    QueueComponent,
    Aria2Component,
    DialogAddDownloadComponent,
    ButtonAddDownloadComponent,
    StatComponent,
    SettingsComponent,
    VersionComponent
  ],
  imports: [CommonModule, MatModule, Aria2RoutingModule, PipelineModule],
  exports: [AddDownloadComponent, ButtonAddDownloadComponent],
  providers: [Aria2RPCCall],
  entryComponents: [DialogAddDownloadComponent]
})
export class Aria2Module {}
