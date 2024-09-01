import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStoreActionsComponent } from './ngrx-store-actions.component';

describe('NgrxStoreActionsComponent', () => {
  let component: NgrxStoreActionsComponent;
  let fixture: ComponentFixture<NgrxStoreActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxStoreActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxStoreActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
