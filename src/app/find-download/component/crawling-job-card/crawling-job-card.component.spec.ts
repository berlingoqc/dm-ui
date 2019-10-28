import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawlingJobCardComponent } from './crawling-job-card.component';

describe('CrawlingJobCardComponent', () => {
  let component: CrawlingJobCardComponent;
  let fixture: ComponentFixture<CrawlingJobCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlingJobCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlingJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
