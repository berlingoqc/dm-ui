import { Component, ViewChild, OnInit } from '@angular/core';
import { RPCClientSocket } from './rpc/rpc-ws-client.service';
import { SideNavComponent } from './dm/component/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'downloda-manager-ui';
  opened: false;

  @ViewChild(SideNavComponent) sideNav: SideNavComponent;

  constructor() {}

  ngOnInit() {}
}
