import { FileExplorerRPClient, FileInfo } from './../fe-rpc';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.sass']
})
export class FileTableComponent {
  @Input() path: string = './';
  @Output() onNavigate = new EventEmitter<FileInfo>();

  _files: FileInfo[];

  source = new MatTableDataSource<FileInfo>();
  rows = ['type', 'name', 'size', 'option'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  @Input()
  set files(data) {
    this._files = data;
    this.source = new MatTableDataSource<FileInfo>(this._files);
    this.source.paginator = this.paginator;
    this.source.sort = this.sort;
  }

  registerPipeline(e: FileInfo) {}
}
