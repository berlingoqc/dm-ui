import { Params } from './../../taskrpc.service';
import { Component, OnInit, Input } from '@angular/core';
import { TaskInfo } from '../../taskrpc.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-card-task-info',
  templateUrl: './card-task-info.component.html',
  styleUrls: ['./card-task-info.component.sass']
})
export class CardTaskInfoComponent {
  @Input() task: TaskInfo;

  constructor() {}
}
