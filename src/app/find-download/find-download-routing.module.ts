import { RouterModule, Routes } from '@angular/router';

import { CrawlingJobTableComponent } from './component/crawling-job-table/crawling-job-table.component';
import { EntityCardComponent } from './component/entity-card/entity-card.component';
import { FindDownloadComponent } from './find-download.component';
import { FormCrawlingComponent } from './component/form-crawling/form-crawling.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'find-download',
    component: FindDownloadComponent,
    children: [
      {
        path: '',
        component: CrawlingJobTableComponent
      },
      {
        path: 'entity',
        component: EntityCardComponent
      },
      {
        path: 'new',
        component: FormCrawlingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindDownloadRoutingModule {}
