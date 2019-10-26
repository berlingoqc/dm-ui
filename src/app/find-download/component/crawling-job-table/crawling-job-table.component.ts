import { Component, OnInit } from '@angular/core';
import { CrawlingRunInfo, DaemonAPI } from 'projects/ngx-find-download-link/src/public-api';

import { FindDownloadWS } from './../../../../../projects/ngx-find-download-link/src/lib/ws';
import { showMessagObservable } from 'src/app/utility/snackbar';

@Component({
  selector: 'app-crawling-job-table',
  templateUrl: './crawling-job-table.component.html',
  styleUrls: ['./crawling-job-table.component.sass']
})
export class CrawlingJobTableComponent implements OnInit {
  infos: CrawlingRunInfo[] = [];

  constructor(private daemonAPI: DaemonAPI, private findDownloadWS: FindDownloadWS) {
    this.findDownloadWS.onCrawlingInfoUpdate().subscribe(x => {
      const index = this.infos.findIndex(y => y.id === x.id );
      if (index > -1) {
        this.infos[index] = x;
      }
    });
  }

  ngOnInit() {
    this.daemonAPI.GetActiveCrawler().subscribe(infos => {
      this.infos = infos;
    } );
  }

  cancel(info: CrawlingRunInfo) {
    showMessagObservable(this.daemonAPI.StopActiveCrawler(info.id), () => 'Crawler is stop');
  }

  remove(info: CrawlingRunInfo) {
    this.daemonAPI.RemoveCrawler(info.id).subscribe(x => {
      this.infos = x;
    });
  }

  error(err: any) {
    return JSON.stringify(err);
  }



}
