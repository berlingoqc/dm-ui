import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dm-dashboard',
  template: `
    <div>
      <div>
        <h4>Runner</h4>
        <app-program-card></app-program-card>
      </div>
      <div>
        <h4>Connection</h4>
        <app-proxy-ws-list></app-proxy-ws-list>
      </div>
    </div>
  `
})
export class DmDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
