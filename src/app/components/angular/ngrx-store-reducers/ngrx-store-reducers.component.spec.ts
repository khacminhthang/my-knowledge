import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStoreReducersComponent } from './ngrx-store-reducers.component';

describe('NgrxStoreReducersComponent', () => {
  let component: NgrxStoreReducersComponent;
  let fixture: ComponentFixture<NgrxStoreReducersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxStoreReducersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxStoreReducersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
