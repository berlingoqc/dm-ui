import {Component, OnInit, ViewChild} from '@angular/core';

import {NavItem} from './utility/chip-list-nav';
import {SideNavComponent} from './dm/component/side-nav/side-nav.component';
import { DMContextService } from './dm/context.service';

export interface Zone {
  name: string;
  zone?: NavItem[];
}

const zoneSettings: Zone[] = [
  {
    name: 'aria2',
  },
  {
    name: 'pipeline',
    zone: [
      {
        destination: 'pipeline',
        icon: 'home',
      },
      {
        destination: 'pipeline/new',
        icon: 'create',
      },
    ],
  },
  {
    name: 'task',
    zone: [
      {
        destination: 'task',
        icon: 'home',
      },
      {
        destination: 'task/new/interpretor',
        icon: 'create',
      },
    ],
  },
  {
    name: 'find-download',
    zone: [
      {
        destination: 'find-download',
        icon: 'home',
      },
      {
        destination: 'find-download/new',
        icon: 'create'
      },
      {
        destination: 'find-download/entity',
        icon: 'search'
      }
    ]
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dm-ui';
  opened = true;
  activeSection: Zone;

  isConfigure: boolean;

  @ViewChild(SideNavComponent, { static: true }) sideNav: SideNavComponent;

  constructor(private ctxService: DMContextService) {
  }

  ngOnInit() {
    const settings = this.ctxService.getDefaultBackend();
    this.isConfigure = (settings !== null && settings !== undefined);
    console.log(settings);
    console.log(this.isConfigure);
  }

  onZoneChange(zone: string) {
    console.log(zone);
    this.activeSection = zoneSettings.find((x) => x.name === zone);
  }
}
