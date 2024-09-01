import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStoreSelectorsComponent } from './ngrx-store-selectors.component';

describe('NgrxStoreSelectorsComponent', () => {
  let component: NgrxStoreSelectorsComponent;
  let fixture: ComponentFixture<NgrxStoreSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxStoreSelectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxStoreSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
