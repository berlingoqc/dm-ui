import { PipelineRPCClient } from './pipeline/pipeline-rpc';
import { Aria2Module } from './aria2/aria2.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatModule } from './mat/mat.module';
import { NgModule, Injector } from '@angular/core';
import { YdlUiModule } from './ydl-ui/ydl-ui.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceLocator } from './locator.service';
import { RPCSystemCall } from './rpc/rpc-client.service';
import { RpcModule } from './rpc/rpc.module';
import { TaskModule } from './task/task.module';
import { PipelineModule } from './pipeline/pipeline.module';
import { SettingsModule } from './settings/settings.module';
import { RPCClientSocket } from './rpc/rpc-ws-client.service';
import { Aria2WS } from './aria2/aria2rpc.service';
import { SideNavComponent } from './dm/component/side-nav/side-nav.component';
import { DmModule } from './dm/dm.module';
import { showMessagObservable } from './utility/snackbar';
import { HomeComponent } from './home/home.component';
import { UtilityModule } from './utility/utility.module';
import { FileexplorerModule } from './fileexplorer/fileexplorer.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    FileexplorerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector2: Injector, client: RPCClientSocket, ariaSocket: Aria2WS, pipeline: PipelineRPCClient) {
    ServiceLocator.injector = this.injector2;
    client.init();
    showMessagObservable(ariaSocket.onDownloadStart(), () => 'A download just start');
  }
}
