import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawlingJobTableComponent } from './crawling-job-table.component';

describe('CrawlingJobTableComponent', () => {
  let component: CrawlingJobTableComponent;
  let fixture: ComponentFixture<CrawlingJobTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlingJobTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlingJobTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
