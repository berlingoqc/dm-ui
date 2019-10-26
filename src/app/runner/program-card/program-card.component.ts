import { Component, OnInit } from '@angular/core';
import { RunnerInfo, RunnerRPC } from '../runner-rpc.module';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.sass']
})
export class ProgramCardComponent implements OnInit {
  runners: RunnerInfo[];

  constructor(private client: RunnerRPC) {
    this.client.GetActiveRunner().subscribe(runners => {
      this.runners = runners;
    });
  }

  ngOnInit() {}
}
