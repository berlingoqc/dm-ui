import { Component, OnInit } from '@angular/core';
import { DaemonAPI, IntervalCrawled } from 'projects/ngx-find-download-link/src/public-api';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-crawling',
  templateUrl: './form-crawling.component.html',
  styleUrls: ['./form-crawling.component.sass']
})
export class FormCrawlingComponent implements OnInit {

  formGroup: FormGroup;

  crawlers: string[];
  innerBrowsings: string[] = [];

  innerCrawler: string;

  interval: { [id: string]: IntervalCrawled[]} = {};

  set crawler(c: string) {
    this.innerCrawler = c;
    this.daemon.GetAvailableBrowsingForCrawler(c).subscribe(x => {
      this.innerBrowsings = x;
    });
    this.daemon.GetCrawledInterval(c).subscribe(x => {
      this.interval = x;
    });
  }

  constructor(private location: Location, private daemon: DaemonAPI, private router: Router) {
    this.formGroup = new FormGroup({
      provider: new FormControl('', [Validators.required]),
      browsing: new FormControl('', [Validators.required]),
      startingIndex: new FormControl('0', [Validators.required]),
      endingIndex: new FormControl('30', [Validators.required])
    });
    this.daemon.GetAvailableCrawler().subscribe(x => {
      this.crawlers = x;
    });
  }

  ngOnInit() {
  }

  validateForm() {
    const v = this.formGroup.value;
    const startingIndex: number = + v.startingIndex;
    const endingIndex: number = + v.endingIndex;
    this.daemon.StartCrawler(v.provider, v.browsing, startingIndex, endingIndex).subscribe(x => {
      this.router.navigate(['find-download']);
    });

  }

  getIntervals(): any[] {
    return Object.entries(this.interval);
  }

  onCancel(event: MouseEvent) {
    event.preventDefault();
    this.location.back();
  }

}
