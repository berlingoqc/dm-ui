import { Component, OnInit, Input } from '@angular/core';
import { ActiveWSClient, ProxyWSRPC } from '../../rpc-client.service';

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
