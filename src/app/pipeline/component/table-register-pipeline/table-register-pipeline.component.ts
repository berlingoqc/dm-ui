import { map } from 'rxjs/operators';
import { PipelineRPCClient, PipelineWS, TrRPCClient } from './../../pipeline-rpc';
import { Component, OnInit } from '@angular/core';
import { RegisterPipeline } from '../../pipeline-rpc';
import { showMessagObservable } from 'src/app/utility/snackbar';

@Component({
  selector: 'app-table-register-pipeline',
  templateUrl: './table-register-pipeline.component.html',
  styleUrls: ['./table-register-pipeline.component.sass']
})
export class TableRegisterPipelineComponent implements OnInit {
  register: RegisterPipeline[];
  displayColumns = ['provider', 'file', 'pipeline', 'option'];
  constructor(private client: PipelineRPCClient, private trClient: TrRPCClient, private socket: PipelineWS) {}

  ngOnInit() {
    this.refresh();
    this.socket.onPipelineRegisterUpdate().subscribe(() => {
      console.log('Updating pipeline register');
      this.refresh();
    });
  }

  refresh() {
    this.client.GetRegister().subscribe((data: any) => {
      console.log(data);
      this.register = Object.values(data[0]).map(x => x) as RegisterPipeline[];
    });
  }

  launch(register: RegisterPipeline) {
    showMessagObservable(this.trClient.TriggerRegister('manualTrigger', register.file), d => d);
  }
}
