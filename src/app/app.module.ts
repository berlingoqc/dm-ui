import { DaemonAPI, NgxFindDownloadLinkModule } from 'projects/ngx-find-download-link/src/public-api';
import { Injector, NgModule } from '@angular/core';
import { NgxJsonrpcModule, RPCClientSettings, RPCClientSocket } from 'ngx-jsonrpc';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Aria2Module } from './aria2/aria2.module';
import { Aria2WS } from './aria2/aria2rpc.service';
import { BrowserModule } from '@angular/platform-browser';
import { DmModule } from './dm/dm.module';
import { FileexplorerModule } from './fileexplorer/fileexplorer.module';
import { FindDownloadModule } from './find-download/find-download.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatModule } from './mat/mat.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { PipelineModule } from './pipeline/pipeline.module';
import { RpcModule } from './rpc/rpc.module';
import { ServiceLocator } from './locator.service';
import { SettingsModule } from './settings/settings.module';
import { TaskModule } from './task/task.module';
import { UtilityModule } from './utility/utility.module';
import { YdlUiModule } from './ydl-ui/ydl-ui.module';
import { showMessagObservable } from './utility/snackbar';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxJsonrpcModule,
    FormsModule,
    AppRoutingModule,
    MatModule,
    YdlUiModule,
    RpcModule,
    Aria2Module,
    TaskModule,
    PipelineModule,
    SettingsModule,
    DmModule,
    UtilityModule,
    FileexplorerModule,
    NgxFindDownloadLinkModule,
    FindDownloadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private injector2: Injector,
    rpcSettings: RPCClientSettings,
    client: RPCClientSocket,
    ariaSocket: Aria2WS) {

    rpcSettings.url = 'localhost:3434';
    ServiceLocator.injector = this.injector2;
    client.init();
    showMessagObservable(ariaSocket.onDownloadStart(), () => 'A download just start');
  }
}
