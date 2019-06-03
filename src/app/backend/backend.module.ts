import { BackendClientService } from './backend-client.service';
import { BackendSettingsService } from './backend-settings.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SocketStateComponent } from './component/socket-state/socket-state.component';

@NgModule({
  declarations: [SocketStateComponent],
  imports: [CommonModule],
  exports: [],
  providers: []
})
export class BackendModule {}
