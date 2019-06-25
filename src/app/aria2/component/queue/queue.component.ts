import { Component, OnInit } from '@angular/core';
import { Aria2RPCCall, Aria2Status } from '../../aria2rpc.service';
import { repeatWhen } from 'rxjs/operators';
import { Observable, interval } from 'rxjs';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];
@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.sass']
})
export class QueueComponent implements OnInit {
  dataSource: Aria2Status[];
  displayedColumns: string[] = ['status', 'name', 'progress', 'speed', 'option'];

  constructor(private aria: Aria2RPCCall) {}

  ngOnInit() {
    this.aria
      .tellWaiting(0, 10)
      .pipe(repeatWhen(() => interval(1000)))
      .subscribe(data => {
        this.dataSource = data;
      });
  }

  togglePauseItem(element: Aria2Status) {
    if (element.status == 'active') {
      this.aria.pause(element.gid).subscribe(data => {
        console.log(data);
      });
    }
  }

  deleteItem(gid: string) {}
}
