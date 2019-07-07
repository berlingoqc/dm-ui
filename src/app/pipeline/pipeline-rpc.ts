import { ActivePipelineStatus } from './pipeline-rpc';
import { Injectable } from '@angular/core';
import { Rpcimplement } from '../rpc/rpc-client.service';
import { Observable, Subject } from 'rxjs';
import { WSRPC } from '../rpc/rpc-ws-client.service';
import { Pipe } from '@angular/compiler/src/core';

export interface TaskNode {
  taskid: string;
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
  state: string;
  activetask: string[];
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

  Register(handler: string, pipeline: string, data: any): Observable<any> {
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
}

@WSRPC('dm', 'pipeline')
@Injectable({
  providedIn: 'root'
})
export class PipelineWS {
  onPipelineStart(): Subject<any> {
    return null;
  }
  onPipelineEnd(): Subject<any> {
    return null;
  }
  onPipelineError(): Subject<any> {
    return null;
  }

  onPipelineStatusUpdate(): Subject<any> {
    return null;
  }
  onTaskEnd(): Subject<any> {
    return null;
  }
  onTaskStart(): Subject<any> {
    return null;
  }
  onTaskError(): Subject<any> {
    return null;
  }
  onTaskUpdate(): Subject<any> {
    return null;
  }
  onPipelineRegisterUpdate(): Subject<any> {
    return null;
  }
  onPipelineActiveUpdate(): Subject<any> {
    return null;
  }
}
