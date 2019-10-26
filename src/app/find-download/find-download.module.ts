import { Aria2Module } from './../aria2/aria2.module';
import { CommonModule } from '@angular/common';
import { CrawlingJobTableComponent } from './component/crawling-job-table/crawling-job-table.component';
import { EntityCardComponent } from './component/entity-card/entity-card.component';
import { FindDownloadComponent } from './find-download.component';
import { FindDownloadRoutingModule } from './find-download-routing.module';
import { FormCrawlingComponent } from './component/form-crawling/form-crawling.component';
import { MatModule } from '../mat/mat.module';
import { NgModule } from '@angular/core';
import { RecordTableComponent } from './component/record-table/record-table.component';

@NgModule({
  declarations: [FormCrawlingComponent, EntityCardComponent, RecordTableComponent, CrawlingJobTableComponent, FindDownloadComponent],
  imports: [
    CommonModule,
    MatModule,
    FindDownloadRoutingModule,
    Aria2Module
  ],
  exports: [FindDownloadRoutingModule],
})
export class FindDownloadModule { }
