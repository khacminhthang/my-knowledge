import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxRouterStoreComponent } from './ngrx-router-store.component';

describe('NgrxRouterStoreComponent', () => {
  let component: NgrxRouterStoreComponent;
  let fixture: ComponentFixture<NgrxRouterStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxRouterStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxRouterStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
