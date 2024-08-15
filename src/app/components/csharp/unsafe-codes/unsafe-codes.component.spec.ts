import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsafeCodesComponent } from './unsafe-codes.component';

describe('UnsafeCodesComponent', () => {
  let component: UnsafeCodesComponent;
  let fixture: ComponentFixture<UnsafeCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsafeCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsafeCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
