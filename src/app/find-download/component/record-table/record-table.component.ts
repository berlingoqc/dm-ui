import { Component, Input, OnInit } from '@angular/core';

import { Record } from 'projects/ngx-find-download-link/src/lib/model';

@Component({
  selector: 'app-record-table',
  templateUrl: './record-table.component.html',
  styleUrls: ['./record-table.component.sass']
})
export class RecordTableComponent implements OnInit {
  displayedColumns = ['source' , 'size', 'info', 'flags', 'options'];

  @Input() records: Record[] = [];

  constructor() { }

  ngOnInit() {
  }

}
