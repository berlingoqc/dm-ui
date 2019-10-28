import { Observable, Subject } from 'rxjs';

import { CrawlingRunInfo } from './model';
import { Injectable } from '@angular/core';
import { WSRPC } from 'ngx-jsonrpc';

@WSRPC('dm', 'findDownload')
@Injectable({
  providedIn: 'root'
})
export class FindDownloadWS {
  onCrawlingInfoUpdate(): Subject<CrawlingRunInfo> {
    return null;
  }
  onArchiveDelete(): Subject<number> {
    return null;
  }
}
