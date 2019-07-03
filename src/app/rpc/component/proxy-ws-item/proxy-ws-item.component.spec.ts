import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyWsItemComponent } from './proxy-ws-item.component';

describe('ProxyWsItemComponent', () => {
  let component: ProxyWsItemComponent;
  let fixture: ComponentFixture<ProxyWsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProxyWsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxyWsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
