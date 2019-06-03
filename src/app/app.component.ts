import { BackendClientService } from './backend/backend-client.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'downloda-manager-ui';

  constructor(private backendClient: BackendClientService) {}
}
