import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

export interface NavItem {
  icon: string;
  destination: string;
  tooltip?: string;
  position?: string;
}

@Component({
  selector: 'app-chip-list-nav',
  template: `
    <mat-chip-list>
      <mat-chip *ngFor="let i of items">
        <mat-icon (click)="router.navigate([i.destination])">{{ i.icon }}</mat-icon>
      </mat-chip>
    </mat-chip-list>
  `
})
export class ChipListNavComponent {
  @Input() items: NavItem[];

  constructor(public router: Router) {}
}
