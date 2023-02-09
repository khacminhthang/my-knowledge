import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredProcedureComponent } from './stored-procedure.component';

describe('StoredProcedureComponent', () => {
  let component: StoredProcedureComponent;
  let fixture: ComponentFixture<StoredProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoredProcedureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
