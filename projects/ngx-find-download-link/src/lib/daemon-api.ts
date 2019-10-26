import { CrawlingRunInfo } from './model';
import { Observable } from 'rxjs';
import { Rpcimplement } from 'ngx-jsonrpc';

@Rpcimplement('dm', 'findDownloadDaemon')
export class DaemonAPI {

  GetActiveCrawler(): Observable<CrawlingRunInfo[]> {
    return null;
  }

  StopActiveCrawler(name: number): Observable<any> {
    return null;
  }

  RemoveCrawler(name: number): Observable<any> {
    return null;
  }

  StartCrawlerAfter(name: number): Observable<CrawlingRunInfo> {
    return null;
  }

  StartCrawler(crawler: string, browsing: string, start: number, end: number): Observable<CrawlingRunInfo> {
    return null;
  }
}
