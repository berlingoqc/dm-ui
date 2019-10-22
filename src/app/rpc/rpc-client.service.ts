import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rpcimplement } from 'ngx-jsonrpc';

export interface RPCHandlerEndpoint {
  namespace: string;
  url: string;
}
export interface ActiveWSClient {
  endpoint: RPCHandlerEndpoint;
  connected: boolean;
  error: string;
  conn: any;
}

@Rpcimplement('dm', 'proxyws')
@Injectable()
export class ProxyWSRPC {
  ActiveClient(): Observable<ActiveWSClient[]> {
    return null;
  }
  ReConnect(namespace: string): Observable<string> {
    return null;
  }

  Disconnect(namespace: string): Observable<string> {
    return null;
  }
}
