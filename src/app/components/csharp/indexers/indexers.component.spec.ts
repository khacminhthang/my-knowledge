import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexersComponent } from './indexers.component';

describe('IndexersComponent', () => {
  let component: IndexersComponent;
  let fixture: ComponentFixture<IndexersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
