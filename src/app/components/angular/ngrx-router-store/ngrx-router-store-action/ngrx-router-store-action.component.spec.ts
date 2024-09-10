import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxRouterStoreActionComponent } from './ngrx-router-store-action.component';

describe('NgrxRouterStoreActionComponent', () => {
  let component: NgrxRouterStoreActionComponent;
  let fixture: ComponentFixture<NgrxRouterStoreActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxRouterStoreActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxRouterStoreActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
