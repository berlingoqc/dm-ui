import { Component, ViewChild, OnInit } from '@angular/core';
import { RPCClientSocket } from './rpc/rpc-ws-client.service';
import { SideNavComponent } from './dm/component/side-nav/side-nav.component';
import { NavItem } from './utility/chip-list-nav';

export interface Zone {
  name: string;
  zone?: NavItem[];
}

const zoneSettings: Zone[] = [
  {
    name: 'aria2'
  },
  {
    name: 'pipeline',
    zone: [
      {
        destination: 'pipeline',
        icon: 'home'
      },
      {
        destination: 'pipeline/new',
        icon: 'create'
      }
    ]
  },
  {
    name: 'task',
    zone: [
      {
        destination: 'task',
        icon: 'home'
      },
      {
        destination: 'task/new/interpretor',
        icon: 'create'
      }
    ]
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'downloda-manager-ui';
  opened: false;
  activeSection: Zone;

  @ViewChild(SideNavComponent) sideNav: SideNavComponent;

  constructor() {}

  ngOnInit() {}

  onZoneChange(zone: string) {
    console.log(zone);
    this.activeSection = zoneSettings.find(x => x.name == zone);
  }
}
