import { Aria2RPCCall, Aria2Status } from '../../aria2rpc.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatRadioChange } from '@angular/material';
import { Observable, Subscription, interval } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { repeatWhen } from 'rxjs/operators';
import { showMessagObservable } from 'src/app/utility/snackbar';

enum TableMode {
  WAITING = 'waiting',
  ACTIVE = 'active',
  STOPPED = 'stopped'
}

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.sass']
})
export class QueueComponent implements OnInit {
  mode: TableMode = TableMode.ACTIVE;
  dataSource: Aria2Status[] = [];

  offset = 0;
  numberShow = 100;

  sub: Subscription;

  constructor(private aria: Aria2RPCCall) {}

  ngOnInit() {
    this.sub = this.getStatusObserver()
      .pipe(repeatWhen(() => interval(1000)))
      .subscribe(data => {
        this.dataSource = data;
      });
  }

  togglePauseItem(element: Aria2Status) {
    if (element.status === 'active') {
      showMessagObservable(this.aria.pause(element.gid), data => data);
    } else if (element.status === 'paused') {
      showMessagObservable(this.aria.unpause(element.gid), data => data);
    }
  }

  onModeChange(mode: MatRadioChange) {
    this.mode =  mode.value as TableMode;
    this.sub.unsubscribe();
    this.ngOnInit();
  }

  deleteItem(gid: string) {
    let obs: Observable<any>;
    if (this.mode === TableMode.STOPPED) {
      obs = this.aria.removeDownloadResult([gid]);
    } else {
      obs = this.aria.remove([gid]);
    }
    showMessagObservable(obs, data => data);
  }

  onItemDownward(gid: string) {}

  onItemUpward(gid: string) {}

  getStatusObserver(): Observable<Aria2Status[]> {
    switch (this.mode) {
      case 'active':
        return this.aria.tellActive();
      case 'stopped':
        return this.aria.tellStopped([this.offset, this.numberShow]);
      case 'waiting':
        console.log('TELL');
        return this.aria.tellWaiting([this.offset, this.numberShow]);
    }
  }

  get getdisplayColumns(): string[] {
    switch (this.mode) {
      case TableMode.ACTIVE:
        return ['status', 'name', 'progress', 'speed', 'option'];
      case TableMode.STOPPED:
        return ['status', 'name', 'progress', 'option'];
      default:
        return ['status', 'name', 'progress', 'option'];
    }
  }
}
