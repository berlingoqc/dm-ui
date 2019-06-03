import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpcUiComponent } from './rpc-ui.component';

describe('RpcUiComponent', () => {
  let component: RpcUiComponent;
  let fixture: ComponentFixture<RpcUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpcUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpcUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
