import { ActivatedRoute, Router } from '@angular/router';
import { PipelineRPCClient, PipelineWS, ActivePipelineStatus, TaskNode } from './../../pipeline-rpc';
import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Pipeline } from '../../pipeline-rpc';

export interface Vec2 {
  x: number;
  y: number;
}

// the link between the task node
export class LinkNode {
  length: number = 150;

  nextPrimitive: TaskNodePrimitive;

  constructor(public angle: number, public node: TaskNodePrimitive, public next: TaskNode) {
    if (next != null) {
      const sp = this.getStartingPoint();
      let x = sp.x + this.length;
      let y = sp.y + this.angle - node.h / 2;
      this.nextPrimitive = new TaskNodePrimitive(x, y, next);
    }
  }

  private getStartingPoint(): Vec2 {
    return {
      x: this.node.x + this.node.w,
      y: this.node.y + this.node.h / 2
    };
  }

  draw(ctx: CanvasRenderingContext2D) {
    const sp = this.getStartingPoint();

    ctx.beginPath();

    ctx.moveTo(sp.x, sp.y);
    ctx.lineTo(sp.x + this.length, sp.y + this.angle);

    ctx.stroke();

    if (this.nextPrimitive != null) {
      this.nextPrimitive.draw(ctx);
    }
  }
}

const startingValueLink = [0, -100, -125, -150];
const incrementValueLink = [0, 200, 125];

// the infamous task node
export class TaskNodePrimitive {
  w: number = 150;
  h: number = 80;

  next: LinkNode[] = [];

  constructor(public x: number, public y: number, public node: TaskNode) {
    if (node != null && node.nextnode != null) {
      const increment = incrementValueLink[node.nextnode.length - 1];
      let value = startingValueLink[node.nextnode.length - 1];

      node.nextnode.forEach((next, index) => {
        const linkNode = new LinkNode(value, this, next);
        value += increment;
        this.next.push(linkNode);
      });
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.getColor();
    ctx.fillRect(this.x, this.y, this.w, this.h);

    ctx.fillText(this.node.taskid, this.x, this.y);

    this.next.forEach(v => v.draw(ctx));
  }

  getColor(): string {
    return 'green';
  }
}

@Component({
  selector: 'app-pipeline-canvas',
  template: `
    <canvas #canvas></canvas>
  `,
  styles: [
    `
      canvas {
        margin: 10px;
        border: 1px solid #000;
      }
    `
  ]
})
export class PipelineCanvasComponent implements AfterViewInit {
  @Input() pipeline_id: string = '';

  @Input() width = 1600;
  @Input() height = 900;

  pipeline: Pipeline;
  active: ActivePipelineStatus;

  startingPrimitive: TaskNodePrimitive;

  @ViewChild('canvas') public canvas: ElementRef;
  canvasEl: HTMLCanvasElement;

  private cx: CanvasRenderingContext2D;

  constructor(private route: ActivatedRoute, private rpc: PipelineRPCClient, private ws: PipelineWS) {
    if (this.pipeline_id == '') {
      this.route.queryParams.subscribe(params => {
        this.pipeline_id = params['id'];
        this.startListening();
      });
    }
  }

  startListening() {
    this.rpc.GetPipeline(this.pipeline_id).subscribe(d => {
      if (d != null) {
        this.pipeline = d[0];
        this.createNeededPrimitive();
      }
    });
  }

  createNeededPrimitive() {
    let x = 10;
    let y = this.canvasEl.height / 2;

    this.startingPrimitive = new TaskNodePrimitive(x, y, this.pipeline.node);

    this.startingPrimitive.draw(this.cx);
  }

  ngAfterViewInit() {
    this.canvasEl = this.canvas.nativeElement;
    this.cx = this.canvasEl.getContext('2d');
    this.canvasEl.width = this.width;
    this.canvasEl.height = this.height;
  }
}

@Component({
  selector: 'app-pipeline-canvas-button',
  template: `
    <mat-chip><mat-icon (click)="toPipelineCanvas()">timeline</mat-icon></mat-chip>
  `
})
export class PipelineCanvasButton {
  @Input() pipeline_id = '';
  @Input() active_id = '';

  constructor(private router: Router) {}

  toPipelineCanvas() {
    this.router.navigate(['pipeline/canvas'], { queryParams: { id: this.pipeline_id, activeid: this.active_id } });
  }
}
