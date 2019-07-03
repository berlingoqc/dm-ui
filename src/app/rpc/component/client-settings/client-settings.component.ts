import { Component, OnInit } from '@angular/core';
import { RPPClientSettings } from '../../rpc-client.service';

@Component({
  selector: 'app-client-settings',
  templateUrl: './client-settings.component.html',
  styleUrls: ['./client-settings.component.sass']
})
export class ClientSettingsComponent implements OnInit {
  constructor(public settings: RPPClientSettings) {}

  ngOnInit() {}
}
