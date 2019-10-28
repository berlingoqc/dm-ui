import { Component, OnInit } from '@angular/core';
import { CrawlingRunInfo, DaemonAPI, FindDownloadWS } from 'projects/ngx-find-download-link/src/public-api';

@Component({
  selector: 'app-crawling-job-table',
  templateUrl: './crawling-job-table.component.html',
  styleUrls: ['./crawling-job-table.component.sass']
})
export class CrawlingJobTableComponent implements OnInit {
  infos: CrawlingRunInfo[] = [];

  archivedInfos: CrawlingRunInfo[] = [];

  constructor(private daemonAPI: DaemonAPI, private findDownloadWS: FindDownloadWS) {
    this.findDownloadWS.onCrawlingInfoUpdate().subscribe(x => {
      const index = this.infos.findIndex(y => y.id === x.id);
      if (index > -1) {
        if (x.status === 'archived') {
          this.infos = this.infos.slice(index + 1, 1);
          this.archivedInfos.push(x);
        } else {
          this.infos[index] = x;
        }
      } else {
        this.infos.push(x);
      }
    });

    this.findDownloadWS.onArchiveDelete().subscribe(id => {
      console.log('archived deleteedd');
      const index = this.archivedInfos.findIndex(x => x.id === id);
      if (index > -1) {
        this.archivedInfos = this.archivedInfos.slice(index + 1, 1);
      }
    });
  }

  ngOnInit() {
    this.daemonAPI.GetActiveCrawler().subscribe(infos => {
      this.infos = infos;
    });
    this.daemonAPI.GetCrawlingRunInfos().subscribe(infos => {
      if (infos) {
        this.archivedInfos = infos;
      }
    });
  }
  error(err: any) {
    return JSON.stringify(err);
  }

}
