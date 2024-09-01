import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStoreInjectingReducersComponent } from './ngrx-store-injecting-reducers.component';

describe('NgrxStoreInjectingReducersComponent', () => {
  let component: NgrxStoreInjectingReducersComponent;
  let fixture: ComponentFixture<NgrxStoreInjectingReducersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxStoreInjectingReducersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxStoreInjectingReducersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
