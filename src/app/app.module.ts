import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BackendModule } from './backend/backend.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatModule } from './mat/mat.module';
import { NgModule, Injector } from '@angular/core';
import { YdlUiModule } from './ydl-ui/ydl-ui.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceLocator } from './locator.service';
import { RPCSystemCall } from './rpc/rpc-client.service';
import { RpcModule } from './rpc/rpc.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatModule,
    YdlUiModule,
    BackendModule,
    RpcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector2: Injector, client: RPCSystemCall) {
    ServiceLocator.injector = this.injector2;
    client.ListNamespace().subscribe(x => {
      console.log('OVEr ', x);
    });
  }
}
