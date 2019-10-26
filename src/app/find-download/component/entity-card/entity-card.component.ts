import { Component, OnInit } from '@angular/core';

import { Entity } from 'projects/ngx-find-download-link/src/lib/model';
import { FindDownloadAPI } from 'projects/ngx-find-download-link/src/lib/db-api';

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.sass']
})
export class EntityCardComponent implements OnInit {
  entitysName: string[];

  entitys: Entity[];

  constructor(private findDownloadAPI: FindDownloadAPI) { }

  ngOnInit() {
    this.findDownloadAPI.GetEntityName().subscribe(x => {
      this.entitysName = x;
      this.entitys = new Array(this.entitysName.length);
    });
  }


  getContent(index: number) {
    const data = this.entitys[index];
    if (!data) {
      this.findDownloadAPI.GetEntity(this.entitysName[index]).subscribe(x => {
        this.entitys[index] = x;
      });
    }
  }
}
