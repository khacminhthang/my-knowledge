import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawSqlComponent } from './raw-sql.component';

describe('RawSqlComponent', () => {
  let component: RawSqlComponent;
  let fixture: ComponentFixture<RawSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawSqlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RawSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
