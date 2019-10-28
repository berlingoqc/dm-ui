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

  StartCrawlerAfter(name: number, ending: number): Observable<CrawlingRunInfo> {
    return null;
  }

  StartCrawler(crawler: string, browsing: string, start: number, end: number): Observable<CrawlingRunInfo> {
    return null;
  }

  GetAvailableCrawler(): Observable<string[]> {
    return null;
  }

  GetAvailableBrowsingForCrawler(name: string): Observable<string[]> {
    return null;
  }

  GetCrawlingRunDetail(id: number): Observable<CrawlingRunInfo> {
    return null;
  }

  GetCrawlingRunInfos(): Observable<CrawlingRunInfo[]> {
    return null;
  }

  RemoveCrawlingRun(id: number): Observable<any> {
    return null;
  }

}
