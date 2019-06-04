import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDownloadComponent } from './component/add-download/add-download.component';
import { Aria2RPCCall } from './aria2rpc.service';

@NgModule({
  declarations: [AddDownloadComponent],
  imports: [CommonModule],
  exports: [AddDownloadComponent],
  providers: [Aria2RPCCall]
})
export class Aria2Module {}
