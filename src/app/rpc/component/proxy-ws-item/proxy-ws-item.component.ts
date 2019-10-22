import { ActiveWSClient, ProxyWSRPC } from '../../rpc-client.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proxy-ws-item',
  templateUrl: './proxy-ws-item.component.html',
  styleUrls: ['./proxy-ws-item.component.sass']
})
export class ProxyWsItemComponent implements OnInit {
  @Input() client: ActiveWSClient;

  constructor() {}

  ngOnInit() {}
}
