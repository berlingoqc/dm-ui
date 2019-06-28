import { Component, OnInit } from '@angular/core';
import { RPCClientSocket } from '../../rpc-ws-client.service';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material';

@Component({
  selector: 'app-ws-status',
  template: `
    <div>
      <mat-icon (click)="onClick()" matTooltip="{{ socket.settings.url }}" matTooltipPosition="right">{{
        socket.connected ? 'thumb_up_alt' : 'thumb_down_alt'
      }}</mat-icon>
    </div>
  `
})
export class WsStatusComponent implements OnInit {
  constructor(public socket: RPCClientSocket, private bottomSheet: MatBottomSheet) {}

  ngOnInit() {}

  onClick() {
    this.bottomSheet.open(BottomOptionWSComponent);
  }
}

export interface BottomOption {
  callback: () => void;
  text: string[];
}

@Component({
  selector: 'app-bottom-option-ws',
  template: `
    <mat-nav-list>
      <a *ngFor="let opt of getOptions()" (click)="opt.callback(); bottomSheet.dismiss()" mat-list-item>
        <span mat-line *ngFor="let t of opt.text">{{ t }}</span>
      </a>
    </mat-nav-list>
  `
})
export class BottomOptionWSComponent {
  constructor(public bottomSheet: MatBottomSheetRef<BottomOptionWSComponent>, private socket: RPCClientSocket) {}

  getOptions(): BottomOption[] {
    if (this.socket.connected) {
      return [
        {
          callback: () => {},
          text: ['Disconnect', 'Stop for relationship']
        }
      ];
    }
    return [
      {
        callback: () => {
          this.socket.init();
        },
        text: ['Connect', 'Start a new relationship']
      }
    ];
  }
}
