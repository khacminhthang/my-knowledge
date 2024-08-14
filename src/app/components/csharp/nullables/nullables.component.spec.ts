import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NullablesComponent } from './nullables.component';

describe('NullablesComponent', () => {
  let component: NullablesComponent;
  let fixture: ComponentFixture<NullablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NullablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NullablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
