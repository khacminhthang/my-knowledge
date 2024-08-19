import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroFeOverviewComponent } from './micro-fe-overview.component';

describe('MicroFeOverviewComponent', () => {
  let component: MicroFeOverviewComponent;
  let fixture: ComponentFixture<MicroFeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroFeOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroFeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
