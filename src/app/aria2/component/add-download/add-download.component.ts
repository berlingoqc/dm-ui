import { Aria2RPCCall } from './../../aria2rpc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-download',
  templateUrl: './add-download.component.html',
  styleUrls: ['./add-download.component.sass']
})
export class AddDownloadComponent implements OnInit {
  url: string;

  constructor(private aria2: Aria2RPCCall) {}

  ngOnInit() {}

  addToQueue() {
    this.aria2.addUri([this.url]).subscribe(over => {
      console.log(over);
    });
  }
}
