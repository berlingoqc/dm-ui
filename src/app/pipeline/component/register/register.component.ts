import { Variable, ActivePipelineStatus } from './../../pipeline-rpc';
import { Pipe } from '@angular/compiler/src/core';
import { Component, OnInit, Input } from '@angular/core';
import { Pipeline, PipelineRPCClient } from '../../pipeline-rpc';
import { pipe } from '@angular/core/src/render3';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  styleUrls: ['./register.scss'],
  template: `
    <div *ngIf="!wanna">
      <button mat-button (click)="wanna = true"><mat-icon>add</mat-icon> register pipeline</button>
    </div>
    <div *ngIf="wanna">
      <app-pipeline-select (onChange)="change($event)"></app-pipeline-select>
      <div *ngIf="pipeline != null">
        <h4>Pipeline Variables</h4>

        <mat-form-field (change)="changeVariable(v, $event)" *ngFor="let v of pipeline.variables">
          <input matInput placeholder="{{ v.name }}" />
          <mat-hint>{{ v.description }}</mat-hint>
        </mat-form-field>
      </div>
    </div>
  `
})
export class RegisterComponent {
  @Input() wanna = false;

  pipeline: Pipeline;

  variables: { [id: string]: any } = {};

  constructor(private client: PipelineRPCClient) {}

  change(pipeline: Pipeline) {
    this.pipeline = pipeline;
    console.log(this.pipeline);
  }

  changeVariable(variable: Variable, newVar: Event) {
    const value = (newVar.target as HTMLInputElement).value;
    this.variables[variable.name] = value;
    console.log(this.variables);
  }

  register(provider: string, data): Observable<any> {
    return this.client.Register(provider, this.pipeline.id, data, this.variables);
  }

  active(file: string): Observable<ActivePipelineStatus> {
    return this.client.StartOnLocalFile(file, this.pipeline.id, this.variables);
  }
}
