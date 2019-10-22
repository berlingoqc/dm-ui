import { Observable, Subject } from 'rxjs';

import { ActivePipelineStatus } from './pipeline-rpc';
import { Injectable } from '@angular/core';
import { Pipe } from '@angular/compiler/src/core';
import { Rpcimplement } from 'ngx-jsonrpc';
import { WSRPC } from 'ngx-jsonrpc';

export interface TaskNode {
  taskid: string;
  nodeid: string;
  params: { [id: string]: any };
  nextnode: TaskNode[];
}

export interface Variable {
  name: string;
  type: string;
  description: string;
}

export interface Pipeline {
  id: string;
  name: string;
  variables: Variable[];
  node: TaskNode;
}

export interface ActivePipelineStatus {
  pipeline: string;
  file: string;
  state: string;
  activetask: string;
  taskresult: { [id: string]: any };
}

export interface RegisterPipeline {
  file: string;
  pipeline: string;
  provider: string;
  data: any[];
}

export interface TaskQueueItem {
  index: number;
  tasknode: TaskNode;
  result: string[];
  previous: TaskQueueItem;
}

@Rpcimplement('dm', 'tr')
@Injectable()
export class TrRPCClient {
  TriggerRegister(event: string, file: string): Observable<any> {
    return null;
  }
}

@Rpcimplement('dm', 'pipeline')
@Injectable()
export class PipelineRPCClient {
  GetPipelines(): Observable<{ [id: string]: Pipeline }> {
    return null;
  }
  GetPipeline(id: string): Observable<Pipeline> {
    return null;
  }

  GetRegister(): Observable<{ [id: string]: RegisterPipeline }> {
    return null;
  }

  GetActives(): Observable<ActivePipelineStatus[]> {
    return null;
  }

  GetActive(id: string): Observable<ActivePipelineStatus> {
    return null;
  }

  Register(handler: string, pipeline: string, data: any, variable: any): Observable<any> {
    return null;
  }

  StartOnLocalFile(filepath: string, pipelineid: string, data: any): Observable<ActivePipelineStatus> {
    return null;
  }

  Create(data: Pipeline): Observable<any> {
    return null;
  }

  Delete(id: string): Observable<any> {
    return null;
  }

  DeleteRegister(id: string): Observable<any> {
    return null;
  }

  DeleteActive(id: string): Observable<string> {
    return null;
  }
}

export interface TaskMessage {
  id: string;
  files: string[];
  output: string[];
  err: string;
}

@WSRPC('dm', 'pipeline')
@Injectable({
  providedIn: 'root'
})
export class PipelineWS {
  onPipelineStart(): Subject<ActivePipelineStatus> {
    return null;
  }
  onPipelineEnd(): Subject<ActivePipelineStatus> {
    return null;
  }
  onPipelineError(): Subject<ActivePipelineStatus> {
    return null;
  }

  onPipelineStatusUpdate(): Subject<ActivePipelineStatus> {
    return null;
  }
  onTaskEnd(): Subject<TaskMessage> {
    return null;
  }
  onTaskStart(): Subject<string> {
    return null;
  }
  onTaskError(): Subject<TaskMessage> {
    return null;
  }
  onTaskUpdate(): Subject<TaskMessage> {
    return null;
  }
  onPipelineRegisterUpdate(): Subject<{ [id: string]: RegisterPipeline }> {
    return null;
  }
  onPipelineActiveUpdate(): Subject<{ [id: string]: ActivePipelineStatus }> {
    return null;
  }
}
