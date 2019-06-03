import { Injectable } from '@angular/core';

export interface BackendSettings {
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class BackendSettingsService {
  setting: BackendSettings;

  constructor() {
    this.setting = {
      url: 'ws://localhost:3001'
    };
  }
}
