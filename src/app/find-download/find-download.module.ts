import { CommonModule, DatePipe } from '@angular/common';

import { Aria2Module } from './../aria2/aria2.module';
import { CrawledIntervalChartComponent } from './component/crawled-interval-chart/crawled-interval-chart.component';
import { CrawlingJobCardComponent } from './component/crawling-job-card/crawling-job-card.component';
import { CrawlingJobTableComponent } from './component/crawling-job-table/crawling-job-table.component';
import { EntityCardComponent } from './component/entity-card/entity-card.component';
import { FindDownloadComponent } from './find-download.component';
import { FindDownloadRoutingModule } from './find-download-routing.module';
import { FormCrawlingComponent } from './component/form-crawling/form-crawling.component';
import { MatModule } from '../mat/mat.module';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxJsonrpcModule } from 'ngx-jsonrpc';
import { RecordTableComponent } from './component/record-table/record-table.component';

@NgModule({
  declarations: [
    FormCrawlingComponent,
    EntityCardComponent,
    RecordTableComponent,
    CrawlingJobTableComponent,
    FindDownloadComponent,
    CrawlingJobCardComponent,
    CrawledIntervalChartComponent],
  imports: [
    CommonModule,
    MatModule,
    FindDownloadRoutingModule,
    Aria2Module,
  ],
  providers: [DatePipe],
  exports: [FindDownloadRoutingModule],
})
export class FindDownloadModule { }
