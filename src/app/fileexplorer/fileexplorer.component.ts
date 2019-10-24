import { Component, OnInit } from '@angular/core';
import { FileExplorerRPClient, FileInfo } from './fe-rpc';

@Component({
  selector: 'app-file-explorer',
  template: `
    <app-navigation-bar [path]="path" [files]="files" (onPrevious)="goBackHistory()"></app-navigation-bar>

    <app-file-table [path]="path" [files]="files" (onNavigate)="cd($event)"></app-file-table>
  `
})
export class FileExplorerComponent implements OnInit {
  files: FileInfo[];
  path = '/';

  previous_dir: string[] = [];

  constructor(private client: FileExplorerRPClient) {}

  ngOnInit() {
    this.client.Ls(this.path).subscribe(f => this.subLs(f));
  }

  cd(info: FileInfo) {
    if (info.isDir) {
      this.previous_dir.push(this.path);
      this.path = info.path + (info.path.endsWith('/') ? '' : '/') + info.name;
      this.client.Ls(this.path).subscribe(f => this.subLs(f));
    }
  }

  goBackHistory() {
    if (this.previous_dir.length > 0) {
      const previous = this.previous_dir.pop();
      this.path = previous;
      this.client.Ls(this.path).subscribe(f => this.subLs(f));
      console.log(previous);
    }
  }

  goBack() {}

  private subLs(f: any) {
    if (f != null) {
      this.files = f;
    }
  }
}
