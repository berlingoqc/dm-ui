import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDownloadComponent } from './add-download.component';

describe('AddDownloadComponent', () => {
  let component: AddDownloadComponent;
  let fixture: ComponentFixture<AddDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
