import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceLocator } from '../locator.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const getAllMethods = (obj): string[] => {
  let props = [];

  do {
    const l = Object.getOwnPropertyNames(obj)
      .concat(Object.getOwnPropertySymbols(obj).map(s => s.toString()))
      .sort()
      .filter(
        (p, i, arr) => typeof obj[p] === 'function' && p !== 'constructor' //only the methods //&&           //not the constructor
        //(i == 0 || p !== arr[i - 1]) &&  //not overriding in this prototype
        //props.indexOf(p) === -1          //not overridden in a child
      );
    props = props.concat(l);
  } while (
    (obj = Object.getPrototypeOf(obj)) && //walk-up the prototype chain
    Object.getPrototypeOf(obj) //not the the Object prototype methods (hasOwnProperty, etc...)
  );

  return props;
};

export interface RPCCall {
  jsonrpc: string;
  id: string;
  params: any[];
  method: string;
  result: any[];
}

@Injectable({
  providedIn: 'root'
})
export class RPPClientSettings {
  url: string = 'localhost:4200';
}

@Injectable()
export class RPCClient {
  namespace: string;

  headers = new HttpHeaders();

  lastCall: RPCCall;
  lastOutput: RPCCall;

  constructor(private http: HttpClient, public settings: RPPClientSettings) {
    this.SetNamespace('system');
  }

  SetNamespace(ns: string) {
    this.namespace = ns;
    this.headers = new HttpHeaders({ 'X-dm-namespace': ns });
  }

  ExecuteCall(method: string, args: any[]): Observable<any> {
    const rpcCall = {
      jsonrpc: '2.0',
      id: 'qwer',
      method: method,
      params: args == null || args == undefined ? [] : args
    } as RPCCall;
    this.lastCall = rpcCall;
    return this.http.post<RPCCall>(this.getRPCEndpoint(), rpcCall, { headers: this.headers }).pipe(
      map(x => {
        this.lastOutput = x;
        return x.result;
      })
    );
  }

  private getRPCEndpoint(): string {
    return 'http://' + this.settings.url + '/jsonrpc';
  }
}

function Rpcimplement(namespace: string, subnamespace: string) {
  return function(Class: Function) {
    const methods = getAllMethods(Class.prototype) as string[];
    methods.forEach(value => {
      console.log('DEFINING ', value);
      Object.defineProperty(Class.prototype, value, {
        value: function(...args: any) {
          const client = ServiceLocator.injector.get(RPCClient);
          client.SetNamespace(namespace);
          return client.ExecuteCall(subnamespace + '.' + value, args);
        }
      });
    });
  };
}

@Rpcimplement('system', 'system')
@Injectable()
export class RPCSystemCall {
  ListMethods(): Observable<string[]> {
    return null;
  }
  ListNotifications(): Observable<string[]> {
    return null;
  }
  ListNamespace(): Observable<string[]> {
    return null;
  }
}
