import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStoreIntallComponent } from './ngrx-store-intall.component';

describe('NgrxStoreIntallComponent', () => {
  let component: NgrxStoreIntallComponent;
  let fixture: ComponentFixture<NgrxStoreIntallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxStoreIntallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxStoreIntallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
