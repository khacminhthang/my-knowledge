import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxInstallationComponent } from './nx-installation.component';

describe('NxInstallationComponent', () => {
  let component: NxInstallationComponent;
  let fixture: ComponentFixture<NxInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NxInstallationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NxInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
