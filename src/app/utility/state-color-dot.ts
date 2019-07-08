import { Component, Input } from '@angular/core';
import { style, state, transition, animate, trigger } from '@angular/animations';

export enum State {
  NONE = 0,
  WAITING = 1,
  RUNNING = 2,
  CANCEL = 3,
  over = 4,
  ERROR = 5
}

export const StateColors = ['#FFFACD', '#FFFF00', '#008000', '#F08080', '#0000FF', '#FF0000'];

@Component({
  selector: 'app-state-color-dot',
  template: `
    <mat-icon matTooltip="{{ state }}" matTooltipPosition="right" [style.color]="GetStateColor()">lens</mat-icon>
  `,
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1
        })
      ),
      state(
        'closed',
        style({
          opacity: 0
        })
      ),
      transition('* <=> *', [animate('1s')]),
      transition('closed => open', [animate('1s')])
    ])
  ]
})
export class StateColorDotComponent {
  @Input() state: State = State.NONE;

  GetStateColor(): string {
    return StateColors[State[this.state]];
  }
}
