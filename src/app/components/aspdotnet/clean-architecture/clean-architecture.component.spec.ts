import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanArchitectureComponent } from './clean-architecture.component';

describe('CleanArchitectureComponent', () => {
  let component: CleanArchitectureComponent;
  let fixture: ComponentFixture<CleanArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanArchitectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
