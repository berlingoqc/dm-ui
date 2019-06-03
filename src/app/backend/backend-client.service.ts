import { BackendSettingsService } from './backend-settings.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

enum SourceApp {
  youtubedl,
  aria
}

interface Message {
  application: SourceApp;
  event: any;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class BackendClientService {
  private socket;

  public subjectYoutube: Subject<any> = new Subject();

  constructor(private settingService: BackendSettingsService) {
    this.startWebSocket();
  }

  startWebSocket() {
    console.log('Starting websocket client to backend');
    this.socket = webSocket(this.settingService.setting.url);
    this.socket.subscribe((data: Message) => {
      switch (data.application) {
        case SourceApp.youtubedl:
          this.subjectYoutube.next(data);
      }
    });
  }

  sendSocket(message: Message) {
    this.socket.next(message);
  }
}
