import { Injectable } from '@angular/core';
import { Rpcimplement } from '../rpc/rpc-client.service';
import { Observable } from 'rxjs';

export interface TaskNode {
  taskid: string;
  params: { [id: string]: any };
  nextnode: TaskNode[];
}

export interface Pipeline {
  id: string;
  name: string;
  node: TaskNode;
}

export interface ActivePipelineStatus {
  pipeline: string;
  state: string;
  activetask: string[];
  taskresult: { [id: string]: any };
}

@Rpcimplement('dm', 'pipeline')
@Injectable()
export class PipelineRPCClient {
  GetPipelines(): Observable<{ [id: string]: Pipeline }> {
    return null;
  }

  GetRegister(): Observable<{ [id: string]: string }> {
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
}
