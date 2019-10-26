import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCrawlingComponent } from './form-crawling.component';

describe('FormCrawlingComponent', () => {
  let component: FormCrawlingComponent;
  let fixture: ComponentFixture<FormCrawlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCrawlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCrawlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
