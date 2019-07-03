import { ProxyWSRPC, ActiveWSClient } from './../../rpc-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proxy-ws-list',
  templateUrl: './proxy-ws-list.component.html',
  styleUrls: ['./proxy-ws-list.component.sass']
})
export class ProxyWsListComponent implements OnInit {
  clients: ActiveWSClient[];

  constructor(private client: ProxyWSRPC) {
    this.client.ActiveClient().subscribe((d: any) => {
      this.clients = d[0];
    });
  }

  ngOnInit() {}
}
