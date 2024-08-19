import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxModuleFederationTechnicalOverviewComponent } from './nx-module-federation-technical-overview.component';

describe('NxModuleFederationTechnicalOverviewComponent', () => {
  let component: NxModuleFederationTechnicalOverviewComponent;
  let fixture: ComponentFixture<NxModuleFederationTechnicalOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NxModuleFederationTechnicalOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NxModuleFederationTechnicalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
