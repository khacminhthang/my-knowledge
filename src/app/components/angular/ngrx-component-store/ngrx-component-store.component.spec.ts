import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxComponentStoreComponent } from './ngrx-component-store.component';

describe('NgrxComponentStoreComponent', () => {
  let component: NgrxComponentStoreComponent;
  let fixture: ComponentFixture<NgrxComponentStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxComponentStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxComponentStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
