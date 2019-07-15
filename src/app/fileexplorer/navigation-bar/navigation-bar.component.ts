import { FileInfo } from './../fe-rpc';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.sass']
})
export class NavigationBarComponent implements OnInit {
  @Input() path: string;
  @Input() files: FileInfo[];

  @Output() onPrevious = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
