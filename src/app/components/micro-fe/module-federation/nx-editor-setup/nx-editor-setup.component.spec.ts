import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxEditorSetupComponent } from './nx-editor-setup.component';

describe('NxEditorSetupComponent', () => {
  let component: NxEditorSetupComponent;
  let fixture: ComponentFixture<NxEditorSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NxEditorSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NxEditorSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
