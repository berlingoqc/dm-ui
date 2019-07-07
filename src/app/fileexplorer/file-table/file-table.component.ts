import { FileExplorerRPClient, FileInfo } from './../fe-rpc';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.sass']
})
export class FileTableComponent implements OnInit {
  @Input() path: string = './';

  files: FileInfo[];

  source = new MatTableDataSource<FileInfo>();
  rows = ['type', 'name', 'size', 'option'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private client: FileExplorerRPClient) {}

  ngOnInit() {
    this.client.Ls(this.path).subscribe((f: any) => {
      if (f != null) {
        this.files = f[0];
        this.source = new MatTableDataSource<FileInfo>(this.files);
        this.source.paginator = this.paginator;
      }
    });
  }

  registerPipeline(e: FileInfo) {}
}
