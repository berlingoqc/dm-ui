import { Component, OnInit, ViewChild } from '@angular/core';

import { Aria2RPCCall } from './../../aria2rpc.service';
import { RegisterComponent } from 'src/app/pipeline/component/register/register.component';

@Component({
  selector: 'app-add-download',
  templateUrl: './add-download.component.html',
  styleUrls: ['./add-download.component.sass']
})
export class AddDownloadComponent implements OnInit {
  url: string;

  @ViewChild(RegisterComponent, { static: true }) registerComponent: RegisterComponent;

  constructor(private aria2: Aria2RPCCall) {}

  ngOnInit() {}

  addToQueue() {
    this.aria2.addUri([[this.url]]).subscribe(over => {
      console.log('GID ' + over);
      /*
      if (this.registerComponent.pipeline !== null) {
        this.registerComponent.register('aria2', [{ gid: over }]).subscribe(data => {
          console.log(data);
        });
      }
      */
    });
  }
}
