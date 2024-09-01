import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxIntroComponent } from './ngrx-intro.component';

describe('NgrxIntroComponent', () => {
  let component: NgrxIntroComponent;
  let fixture: ComponentFixture<NgrxIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
