import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroNxComponent } from './intro-nx.component';

describe('IntroNxComponent', () => {
  let component: IntroNxComponent;
  let fixture: ComponentFixture<IntroNxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroNxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroNxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
