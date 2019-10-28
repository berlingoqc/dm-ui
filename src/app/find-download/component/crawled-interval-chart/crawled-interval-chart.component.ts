import * as echarts from 'echarts';

import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

import { DaemonAPI } from 'projects/ngx-find-download-link/src/public-api';
import { DatePipe } from '@angular/common';
import { IntervalCrawled } from 'projects/ngx-find-download-link/src/lib/model';

@Component({
  selector: 'app-crawled-interval-chart',
  templateUrl: './crawled-interval-chart.component.html',
  styleUrls: ['./crawled-interval-chart.component.sass']
})
export class CrawledIntervalChartComponent implements OnInit, AfterViewInit {

  constructor(private daemonAPI: DaemonAPI, private datePipe: DatePipe) { }

  @Input()
  set interval(interval: IntervalCrawled[]) {
    this.options.yAxis.data = this.getLabels(interval);
    this.options.series[0].data = this.updateDateInex(0, interval);
    this.options.series[1].data = this.updateDateInex(1, interval);
    if (this.chart) {
      this.chart.setOption(this.options);
    }
  }
  chart: any;
  options: any = {
    title: {
      text: '',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter(params) {
        const tar = params[1];
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: {
      type: 'category',
      splitLine: { show: false },
      data: []
    },
    xAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'starting',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          normal: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          },
          emphasis: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          }
        },
        data: []
      },
      {
        name: 'ending',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: []
      }
    ]
  };

  @Input() browsing: string;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.chart = echarts.init(document.getElementById('echarts') as any);
  }

  private getLabels(i: IntervalCrawled[]): string[] {
    return i.map(y => y.id).map(x => this.datePipe.transform(x * 1000, 'short'));
  }

  private updateDateInex(index: number, i: IntervalCrawled[]): number[] {
    return i.map(interval => interval.interval[index]);
  }

}
