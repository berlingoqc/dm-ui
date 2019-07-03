import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyWsListComponent } from './proxy-ws-list.component';

describe('ProxyWsListComponent', () => {
  let component: ProxyWsListComponent;
  let fixture: ComponentFixture<ProxyWsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProxyWsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxyWsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
