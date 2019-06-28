import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(public router: Router) {}

  ngOnInit() {}

  onOpen() {
    const route = this.router.url.substr(1);
    this.setColor(route);
  }
  onNavigate(url: string) {
    this.router.navigate([url]);
    this.setColor(url);
  }

  setColor(route: string) {
    this.navigation.forEach(option => {
      option.color = option.route === route ? SELECTED_COLOR : UNSELECTED_COLOR;
    });
  }
}
