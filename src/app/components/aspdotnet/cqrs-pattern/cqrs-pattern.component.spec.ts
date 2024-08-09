import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CqrsPatternComponent } from './cqrs-pattern.component';

describe('CqrsPatternComponent', () => {
  let component: CqrsPatternComponent;
  let fixture: ComponentFixture<CqrsPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CqrsPatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CqrsPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
