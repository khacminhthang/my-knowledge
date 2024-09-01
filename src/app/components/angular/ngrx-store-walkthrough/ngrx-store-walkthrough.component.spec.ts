import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStoreWalkthroughComponent } from './ngrx-store-walkthrough.component';

describe('NgrxStoreWalkthroughComponent', () => {
  let component: NgrxStoreWalkthroughComponent;
  let fixture: ComponentFixture<NgrxStoreWalkthroughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxStoreWalkthroughComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxStoreWalkthroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
