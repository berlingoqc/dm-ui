import { DaemonAPI } from './daemon-api';
import { FindDownloadAPI } from './db-api';
import { FindDownloadWS } from './ws';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [],
  providers: [DaemonAPI, FindDownloadAPI, FindDownloadWS]
})
export class NgxFindDownloadLinkModule { }
