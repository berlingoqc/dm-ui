import { OnInit, Component } from '@angular/core';
import { FileExplorerRPClient, FileInfo } from './fe-rpc';

@Component({
  selector: 'app-file-explorer',
  template: `
    <app-navigation-bar [path]="path" [files]="files" (onPrevious)="goBack()"></app-navigation-bar>

    <app-file-table [path]="path" [files]="files" (onNavigate)="cd($event)"></app-file-table>
  `
})
export class FileExplorerComponent implements OnInit {
  files: FileInfo[];
  path: string = '/';

  constructor(private client: FileExplorerRPClient) {}

  ngOnInit() {
    this.client.Ls(this.path).subscribe(f => this.subLs(f));
  }

  cd(info: FileInfo) {
    if (info.isDir) {
      this.path = info.path + (info.path.endsWith('/') ? '' : '/') + info.name;
      this.client.Ls(this.path).subscribe(f => this.subLs(f));
    }
  }

  goBack() {}

  private subLs(f: any) {
    if (f != null) {
      this.files = f[0];
    }
  }
}
