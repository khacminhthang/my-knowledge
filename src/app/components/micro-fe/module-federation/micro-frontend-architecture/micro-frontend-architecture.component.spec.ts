import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroFrontendArchitectureComponent } from './micro-frontend-architecture.component';

describe('MicroFrontendArchitectureComponent', () => {
  let component: MicroFrontendArchitectureComponent;
  let fixture: ComponentFixture<MicroFrontendArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroFrontendArchitectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroFrontendArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
