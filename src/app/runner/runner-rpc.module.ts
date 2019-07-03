import { Rpcimplement } from '../rpc/rpc-client.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RunnerInfo {
  name: string;
  state: boolean;
  error: string;
  outputbuffer: string;
  errorbuffer: string;

  cmd: any;
}

@Rpcimplement('dm', 'program')
@Injectable()
export class RunnerRPC {
  GetActiveRunner(): Observable<RunnerInfo[]> {
    return null;
  }
  StartRunner(name: string): Observable<string> {
    return null;
  }
  StopRunner(name: string): Observable<string> {
    return null;
  }
}
