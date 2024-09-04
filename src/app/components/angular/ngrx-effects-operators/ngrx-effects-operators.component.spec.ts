import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxEffectsOperatorsComponent } from './ngrx-effects-operators.component';

describe('NgrxEffectsOperatorsComponent', () => {
  let component: NgrxEffectsOperatorsComponent;
  let fixture: ComponentFixture<NgrxEffectsOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxEffectsOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxEffectsOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
