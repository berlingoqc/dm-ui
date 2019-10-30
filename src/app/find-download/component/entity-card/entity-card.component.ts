import { Component, OnInit } from '@angular/core';
import { Entity, PageInfo, PagingInfo, PagingSearch } from 'projects/ngx-find-download-link/src/lib/model';

import { DaemonAPI } from 'projects/ngx-find-download-link/src/public-api';
import { FindDownloadAPI } from 'projects/ngx-find-download-link/src/lib/db-api';

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.sass']
})
export class EntityCardComponent implements OnInit {
  entitysName: string[];

  entitys: Entity[];

  pageSize = 30;

  paging: PagingSearch = {
    limit: this.pageSize,
    offset: 0,
    orderBy: [],
    query: '',
    category: ''
  };

  pagingInfo: PagingInfo;

  browsings = [];

  constructor(private findDownloadAPI: FindDownloadAPI, private daemonAPI: DaemonAPI) {
    this.daemonAPI.GetAllBrowsing().subscribe(x => (this.browsings = x));
    this.findDownloadAPI.GetPagingInfo().subscribe(x => {
      this.pagingInfo = x;
      this.pagingInfo.current_page = 0;
      this.pagingInfo.nbr_page = this.pagingInfo.item_count / this.paging.offset;
    });
  }

  set browsing(c: string) {
    this.paging.category = c;
    this.ngOnInit();
  }

  get browsing() {
    return this.paging.category;
  }

  set query(c: string) {
    console.log('caca ' + c);
    this.paging.query = c;
    this.ngOnInit();
  }

  get query(): string {
    return this.paging.query;
  }

  ngOnInit() {
    this.findDownloadAPI.GetEntityName(this.paging).subscribe(x => {
      x = (x) ? x : [];
      this.entitysName = x;
      this.entitys = new Array(this.entitysName.length);
    });
  }


  getContent(index: number) {
    const data = this.entitys[index];
    if (!data) {
      this.findDownloadAPI.GetEntity(this.entitysName[index]).subscribe(x => {
        this.entitys[index] = x;
        console.log(x);
      });
    }
  }

  arrowLeft() {
    this.paging.limit -= this.pageSize;
    this.paging.offset -= this.pageSize;
    if (this.paging.offset < 0) {
      this.paging.limit = this.pageSize;
      this.paging.offset = 0;
    }
    this.ngOnInit();
  }

  arrowRight() {
    if (this.entitys.length === this.pageSize) {
      this.paging.limit += this.pageSize;
      this.paging.offset += this.pageSize;
      this.ngOnInit();
    }
  }

}
