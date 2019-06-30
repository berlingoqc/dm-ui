import { Rpcimplement } from '../rpc/rpc-client.service';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WSRPC } from '../rpc/rpc-ws-client.service';

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

export interface Aria2Stat {
  downloadSpeed: number;
  uploadSpeed: number;
  numActive: number;
  numWaiting: number;
  numStopped: number;
  numStoppedTotal: number;
}

export interface Aria2Version {
  version: string;
  enabledFeatures: string[];
}

@Rpcimplement('aria2', 'aria2')
@Injectable()
export class Aria2RPCCall {
  addUri(item: string[]): Observable<string> {
    return null;
  }
  addTorrent(torrent: string): Observable<string> {
    return null;
  }

  forceRemove(gid: string): Observable<string> {
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
  tellStopped(offset: number, num: number): Observable<Aria2Status[]> {
    return null;
  }
  changePosition(gid: string, pos: number, how: string): Observable<any> {
    return null;
  }
  getGlobalStat(): Observable<Aria2Stat> {
    return null;
  }
  getGlobalOption(): Observable<any> {
    return null;
  }

  changeGlobalOption(options: any): Observable<any> {
    return null;
  }

  getVersion(): Observable<Aria2Version> {
    return null;
  }
  purgeDownloadResult(): Observable<string> {
    return null;
  }
  removeDownloadResult(gid: string): Observable<string> {
    return null;
  }
}
@WSRPC('aria2', 'aria2')
@Injectable({
  providedIn: 'root'
})
export class Aria2WS {
  onDownloadStart(): Subject<any> {
    return null;
  }
  onDownloadPause(): Subject<any> {
    return null;
  }
  onDownloadStop(): Subject<any> {
    return null;
  }
  onDownloadComplete(): Subject<any> {
    return null;
  }
  onBtDownloadComplete(): Subject<any> {
    return null;
  }
}
