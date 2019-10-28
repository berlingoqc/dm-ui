import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrawlingRunInfo, DaemonAPI } from 'projects/ngx-find-download-link/src/public-api';

import { showMessagObservable } from 'src/app/utility/snackbar';

@Component({
  selector: 'app-crawling-job-card',
  templateUrl: './crawling-job-card.component.html',
  styleUrls: ['./crawling-job-card.component.sass']
})
export class CrawlingJobCardComponent implements OnInit {

  @Input() info: CrawlingRunInfo;


  constructor(private daemonAPI: DaemonAPI) { }

  ngOnInit() {
    console.log(this.info.status);
  }

  cancel() {
    showMessagObservable(this.daemonAPI.StopActiveCrawler(this.info.id), () => 'Crawler is stop');
  }

  remove() {
    if (this.info.status === 'archived') {
      this.daemonAPI.RemoveCrawlingRun(this.info.id).subscribe(() => {});
      return;
    }
    this.daemonAPI.RemoveCrawler(this.info.id).subscribe(() => {});
  }

  startAfter() {
    this.daemonAPI.StartCrawlerAfter(this.info.id, this.info.ending).subscribe(() => {});
  }

}
