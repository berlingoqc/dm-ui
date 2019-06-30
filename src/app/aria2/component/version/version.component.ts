import { Aria2Version, Aria2RPCCall } from './../../aria2rpc.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-version',
  template: `
    <div *ngIf="version">
      <h5>Version {{ version.version }}</h5>
      <h5>Enable feature</h5>
      <mat-list dense>
        <mat-list-item *ngFor="let f of version.enabledFeatures">{{ f }}</mat-list-item>
      </mat-list>
    </div>
  `,
  styleUrls: ['./version.component.sass']
})
export class VersionComponent implements OnInit {
  @Input() version: Aria2Version;
  constructor(private client: Aria2RPCCall) {}

  ngOnInit() {
    this.client.getVersion().subscribe(data => {
      console.log(data);
      this.version = data;
    });
  }
}
