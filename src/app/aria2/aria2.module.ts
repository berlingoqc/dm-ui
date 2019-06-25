import { MatModule } from './../mat/mat.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDownloadComponent } from './component/add-download/add-download.component';
import { Aria2RPCCall } from './aria2rpc.service';
import { QueueComponent } from './component/queue/queue.component';
import { Aria2Component } from './aria2/aria2.component';
import { Aria2RoutingModule } from './aria2-routing.module';
import { DialogAddDownloadComponent } from './component/dialog-add-download/dialog-add-download.component';
import { ButtonAddDownloadComponent } from './component/button-add-download/button-add-download.component';

@NgModule({
  declarations: [
    AddDownloadComponent,
    QueueComponent,
    Aria2Component,
    DialogAddDownloadComponent,
    ButtonAddDownloadComponent
  ],
  imports: [CommonModule, MatModule, Aria2RoutingModule],
  exports: [AddDownloadComponent],
  providers: [Aria2RPCCall],
  entryComponents: [DialogAddDownloadComponent]
})
export class Aria2Module {}
