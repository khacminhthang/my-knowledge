import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxRouterStoreSelectorsComponent } from './ngrx-router-store-selectors.component';

describe('NgrxRouterStoreSelectorsComponent', () => {
  let component: NgrxRouterStoreSelectorsComponent;
  let fixture: ComponentFixture<NgrxRouterStoreSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxRouterStoreSelectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxRouterStoreSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
