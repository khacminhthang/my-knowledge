import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStoreGetStartComponent } from './ngrx-store-get-start.component';

describe('NgrxStoreGetStartComponent', () => {
  let component: NgrxStoreGetStartComponent;
  let fixture: ComponentFixture<NgrxStoreGetStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxStoreGetStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxStoreGetStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
