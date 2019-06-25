import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddDownloadComponent } from './dialog-add-download.component';

describe('DialogAddDownloadComponent', () => {
  let component: DialogAddDownloadComponent;
  let fixture: ComponentFixture<DialogAddDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
