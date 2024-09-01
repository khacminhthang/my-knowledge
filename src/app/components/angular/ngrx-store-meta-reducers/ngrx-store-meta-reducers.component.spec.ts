import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStoreMetaReducersComponent } from './ngrx-store-meta-reducers.component';

describe('NgrxStoreMetaReducersComponent', () => {
  let component: NgrxStoreMetaReducersComponent;
  let fixture: ComponentFixture<NgrxStoreMetaReducersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxStoreMetaReducersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxStoreMetaReducersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
