import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpcRequestComponent } from './rpc-request.component';

describe('RpcRequestComponent', () => {
  let component: RpcRequestComponent;
  let fixture: ComponentFixture<RpcRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpcRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpcRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
