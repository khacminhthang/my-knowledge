import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasterBuildsWithModuleFederationComponent } from './faster-builds-with-module-federation.component';

describe('FasterBuildsWithModuleFederationComponent', () => {
  let component: FasterBuildsWithModuleFederationComponent;
  let fixture: ComponentFixture<FasterBuildsWithModuleFederationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasterBuildsWithModuleFederationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasterBuildsWithModuleFederationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
