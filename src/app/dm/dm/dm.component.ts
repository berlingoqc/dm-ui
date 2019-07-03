import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dm',
  template: `
    <h1>Backend information</h1>

    <app-client-settings></app-client-settings>

    <router-outlet></router-outlet>
  `
})
export class DmComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
