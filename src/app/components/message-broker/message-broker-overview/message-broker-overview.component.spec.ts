import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBrokerOverviewComponent } from './message-broker-overview.component';

describe('MessageBrokerOverviewComponent', () => {
  let component: MessageBrokerOverviewComponent;
  let fixture: ComponentFixture<MessageBrokerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageBrokerOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBrokerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
