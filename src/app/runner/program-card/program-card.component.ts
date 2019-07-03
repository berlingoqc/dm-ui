import { Component, OnInit } from '@angular/core';
import { RunnerRPC, RunnerInfo } from '../runner-rpc.module';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.sass']
})
export class ProgramCardComponent implements OnInit {
  runners: RunnerInfo[];

  constructor(private client: RunnerRPC) {
    this.client.GetActiveRunner().subscribe((d: any) => {
      this.runners = d[0];
    });
  }

  ngOnInit() {}
}
