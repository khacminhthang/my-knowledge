import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreprocessorDirectivesComponent } from './preprocessor-directives.component';

describe('PreprocessorDirectivesComponent', () => {
  let component: PreprocessorDirectivesComponent;
  let fixture: ComponentFixture<PreprocessorDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreprocessorDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreprocessorDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
