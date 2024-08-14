import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorOverloadingComponent } from './operator-overloading.component';

describe('OperatorOverloadingComponent', () => {
  let component: OperatorOverloadingComponent;
  let fixture: ComponentFixture<OperatorOverloadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorOverloadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorOverloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
