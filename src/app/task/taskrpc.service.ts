import { Injectable } from '@angular/core';
import { InterpretorTask } from './taskrpc.service';
import { Observable } from 'rxjs';
import { Rpcimplement } from 'ngx-jsonrpc';

export interface Params {
  name: string;
  type: string;
  optional: boolean;
  default_value: string;
  description: string;
}

export interface Return {
  type: string;
  description: string;
}

export interface TaskInfo {
  name: string;
  description: string;
  provider: string;
  params: Params[];
  return: Return[];
}

export interface InterpretorTask {
  interpretor: string;
  file: string;
  info: TaskInfo;
}

export interface InputSaveTaskScript {
  taskin: InterpretorTask;
  data: number[];
}

@Rpcimplement('dm', 'task')
@Injectable()
export class TaskRPCCall {
  GetTasks(): Observable<TaskInfo[]> {
    return null;
  }

  SaveTaskScript(task: InputSaveTaskScript): Observable<any> {
    return null;
  }

  DeleteTaskScript(id: string): Observable<any> {
    return null;
  }
}
