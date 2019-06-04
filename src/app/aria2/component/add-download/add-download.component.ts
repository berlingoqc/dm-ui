import { Aria2RPCCall } from './../../aria2rpc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-download',
  templateUrl: './add-download.component.html',
  styleUrls: ['./add-download.component.sass']
})
export class AddDownloadComponent implements OnInit {
  constructor(private aria2: Aria2RPCCall) {}

  ngOnInit() {}
}
