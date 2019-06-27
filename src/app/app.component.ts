import { Component } from '@angular/core';
import { RPCClientSocket } from './rpc/rpc-ws-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'downloda-manager-ui';

  constructor() {}
}
