import { RPCCall, RPPClientSettings } from './rpc-client.service';
import { BackendSettingsService } from './../backend/backend-settings.service';
import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class RPCClientSocket {
  socket;

  constructor(private settings: RPPClientSettings) {
    this.socket = webSocket<RPCCall>(settings.urlsocket + '/jsonrpc');
    this.socket.subscribe(this.handler, this.handlerError);
  }

  handler(message: RPCCall) {}

  handlerError(error: any) {
    console.log('ERROR ', error);
  }
}
