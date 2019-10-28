import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawledIntervalChartComponent } from './crawled-interval-chart.component';

describe('CrawledIntervalChartComponent', () => {
  let component: CrawledIntervalChartComponent;
  let fixture: ComponentFixture<CrawledIntervalChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawledIntervalChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawledIntervalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
