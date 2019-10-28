import { CrawlingRunInfo, Entity } from './model';

import { Observable } from 'rxjs';
import { Rpcimplement } from 'ngx-jsonrpc';

@Rpcimplement('dm', 'findDownload')
export class FindDownloadAPI {

  GetEntityName(): Observable<string[]> {
    return null;
  }

  GetEntity(name: string): Observable<Entity> {
    return null;
  }



}
