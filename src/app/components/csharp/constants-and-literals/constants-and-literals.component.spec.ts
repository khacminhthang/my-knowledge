import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantsAndLiteralsComponent } from './constants-and-literals.component';

describe('ConstantsAndLiteralsComponent', () => {
  let component: ConstantsAndLiteralsComponent;
  let fixture: ComponentFixture<ConstantsAndLiteralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstantsAndLiteralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstantsAndLiteralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
