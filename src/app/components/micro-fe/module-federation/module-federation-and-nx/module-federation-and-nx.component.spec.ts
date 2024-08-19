import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFederationAndNxComponent } from './module-federation-and-nx.component';

describe('ModuleFederationAndNxComponent', () => {
  let component: ModuleFederationAndNxComponent;
  let fixture: ComponentFixture<ModuleFederationAndNxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleFederationAndNxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleFederationAndNxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
