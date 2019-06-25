import { Rpcimplement } from '../rpc/rpc-client.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Aria2Status {
  gid: string;
  status: string;
  totalLength: number;
  completeLength: number;
  uploadLength: number;
  downloadSpeed: number;
  uploadSpeed: number;
  files: string[];
}

@Rpcimplement('aria2', 'aria2')
@Injectable()
export class Aria2RPCCall {
  addUri(item: string[]): Observable<string> {
    return null;
  }
  remove(gid: string): Observable<string> {
    return null;
  }
  pause(gid: string): Observable<any> {
    return null;
  }
  pauseAll(): Observable<string> {
    return null;
  }
  unpause(gid: string): Observable<any> {
    return null;
  }
  unpauseAll(): Observable<string> {
    return null;
  }
  tellStatus(gid: string): Observable<Aria2Status> {
    return null;
  }
  tellActive(): Observable<Aria2Status[]> {
    return null;
  }
  tellWaiting(offset: number, num: number): Observable<Aria2Status[]> {
    return null;
  }
}
