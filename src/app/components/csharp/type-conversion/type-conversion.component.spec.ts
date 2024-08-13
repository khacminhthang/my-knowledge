import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeConversionComponent } from './type-conversion.component';

describe('TypeConversionComponent', () => {
  let component: TypeConversionComponent;
  let fixture: ComponentFixture<TypeConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeConversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
