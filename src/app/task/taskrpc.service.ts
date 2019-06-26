import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Rpcimplement } from '../rpc/rpc-client.service';

export interface Params {
  name: string;
  type: string;
  optional: boolean;
  description: string;
}

export interface TaskInfo {
  name: string;
  description: string;
  params: Params[];
  numberreturn: number;
}

@Rpcimplement('dm', 'task')
@Injectable()
export class TaskRPCCall {
  GetTasks(): Observable<TaskInfo[]> {
    return null;
  }
}
