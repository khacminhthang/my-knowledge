import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxEffectsLifecycleComponent } from './ngrx-effects-lifecycle.component';

describe('NgrxEffectsLifecycleComponent', () => {
  let component: NgrxEffectsLifecycleComponent;
  let fixture: ComponentFixture<NgrxEffectsLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxEffectsLifecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxEffectsLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
