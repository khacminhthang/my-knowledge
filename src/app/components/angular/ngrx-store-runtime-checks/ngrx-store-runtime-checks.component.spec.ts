import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStoreRuntimeChecksComponent } from './ngrx-store-runtime-checks.component';

describe('NgrxStoreRuntimeChecksComponent', () => {
  let component: NgrxStoreRuntimeChecksComponent;
  let fixture: ComponentFixture<NgrxStoreRuntimeChecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxStoreRuntimeChecksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxStoreRuntimeChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
