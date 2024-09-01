import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxSignalsComponent } from './ngrx-signals.component';

describe('NgrxSignalsComponent', () => {
  let component: NgrxSignalsComponent;
  let fixture: ComponentFixture<NgrxSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxSignalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
