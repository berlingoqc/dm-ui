import { CrawlingRunInfo, Entity, PagingInfo, PagingSearch } from './model';

import { Observable } from 'rxjs';
import { Rpcimplement } from 'ngx-jsonrpc';

@Rpcimplement('dm', 'findDownload')
export class FindDownloadAPI {

  GetEntityName(pagingSearch: PagingSearch): Observable<string[]> {
    return null;
  }

  GetEntity(name: string): Observable<Entity> {
    return null;
  }

  GetPagingInfo(): Observable<PagingInfo> {
    return null;
  }



}
