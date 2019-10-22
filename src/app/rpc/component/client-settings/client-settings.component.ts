import { Component, OnInit } from '@angular/core';

import { RPCClientSettings } from 'ngx-jsonrpc';

@Component({
  selector: 'app-client-settings',
  templateUrl: './client-settings.component.html',
  styleUrls: ['./client-settings.component.sass']
})
export class ClientSettingsComponent implements OnInit {
  constructor(public settings: RPCClientSettings) {}

  ngOnInit() {}
}
