import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLibraryVersionsWithModuleFederationComponent } from './manage-library-versions-with-module-federation.component';

describe('ManageLibraryVersionsWithModuleFederationComponent', () => {
  let component: ManageLibraryVersionsWithModuleFederationComponent;
  let fixture: ComponentFixture<ManageLibraryVersionsWithModuleFederationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageLibraryVersionsWithModuleFederationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLibraryVersionsWithModuleFederationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
