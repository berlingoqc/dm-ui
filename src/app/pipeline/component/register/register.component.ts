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
    <mat-form-field *ngIf="wanna">
      <mat-label>Register pipeline</mat-label>
      <select matNativeControl [(ngModel)]="selected" required>
        <option *ngFor="let pipeline of pipelines" value="{{ pipeline.id }}">{{ pipeline.id }}</option>
      </select>
    </mat-form-field>
  `
})
export class RegisterComponent implements OnInit {
  @Input() wanna = false;
  pipelines: Pipeline[];

  selected: string;

  constructor(private client: PipelineRPCClient) {}

  ngOnInit() {
    this.client.GetPipelines().subscribe((data: any) => {
      this.pipelines = Object.values(data[0]).map((x: Pipeline) => x);
      console.log(this.pipelines);
    });
  }

  register(provider: string, data): Observable<any> {
    return this.client.Register(provider, this.selected, data);
  }
}
