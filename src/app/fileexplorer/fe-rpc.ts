import { Rpcimplement } from '../rpc/rpc-client.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface FileInfo {
  path: string;
  name: string;
  size: number;
  extension: string;
  modified: any;
  mode: any;
  isDir: boolean;
  type: string;
}

@Rpcimplement('dm', 'fe')
@Injectable()
export class FileExplorerRPClient {
  Ls(path: string): Observable<FileInfo[]> {
    return null;
  }
  Cat(path: string): Observable<any> {
    return null;
  }
  Mv(path: string, dst: string): Observable<string> {
    return null;
  }
  Cp(path: string, dst: string): Observable<string> {
    return null;
  }
  Rm(path: string[]): Observable<string> {
    return null;
  }
}
