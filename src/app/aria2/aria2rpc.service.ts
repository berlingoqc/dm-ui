import { Rpcimplement } from '../rpc/rpc-client.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Rpcimplement('aria2', 'aria2')
@Injectable()
export class Aria2RPCCall {
  addUri(item: string[]): Observable<string> {
    return null;
  }
}
