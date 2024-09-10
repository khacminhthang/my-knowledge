import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxRouterStoreConfigurationComponent } from './ngrx-router-store-configuration.component';

describe('NgrxRouterStoreConfigurationComponent', () => {
  let component: NgrxRouterStoreConfigurationComponent;
  let fixture: ComponentFixture<NgrxRouterStoreConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxRouterStoreConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxRouterStoreConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
