import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, NavigationStart, Event, NavigationEnd } from '@angular/router';

const SELECTED_COLOR = 'primary';
const UNSELECTED_COLOR = 'warn';

class NavigationOption {
  text: string;
  route: string;
  tooltip: string;
  color: string = 'warn';
}

const NAVIGATION = [
  {
    text: 'ari2',
    route: 'aria2',
    tooltip: 'Access aria2 dashboard',
    color: ''
  },
  {
    text: 'Ydl',
    route: 'ydl',
    tooltip: 'Access youtubeDl dashboard',
    color: ''
  },
  {
    text: 'Pipeline',
    route: 'pipeline',
    tooltip: 'Access pipeline dashboard',
    color: ''
  },
  {
    text: 'Task',
    route: 'task',
    tooltip: 'Access task dashboard',
    color: ''
  },
  {
    text: 'Backend',
    route: 'dm',
    tooltip: 'Acces backend dashboard',
    color: ''
  },
  {
    text: 'Setting',
    route: 'setting',
    tooltip: 'Access application settings',
    color: ''
  }
];

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {
  navigation: NavigationOption[] = NAVIGATION;

  @Output() zoneChange = new EventEmitter<string>();
  constructor(public router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const route = this.router.url.substr(1).split('/')[0];
        this.zoneChange.emit(route);
        this.setColor(route);
      }
    });
  }

  ngOnInit() {}

  onOpen() {
    const route = this.router.url.substr(1);
    this.setColor(route);
  }
  onNavigate(url: string) {
    this.router.navigate([url]);
  }

  setColor(route: string) {
    this.navigation.forEach(option => {
      option.color = option.route === route ? SELECTED_COLOR : UNSELECTED_COLOR;
    });
  }
}
