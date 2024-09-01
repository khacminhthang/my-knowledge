import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStoreTestingComponent } from './ngrx-store-testing.component';

describe('NgrxStoreTestingComponent', () => {
  let component: NgrxStoreTestingComponent;
  let fixture: ComponentFixture<NgrxStoreTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxStoreTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxStoreTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
