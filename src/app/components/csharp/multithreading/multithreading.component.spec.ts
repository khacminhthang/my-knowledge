import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultithreadingComponent } from './multithreading.component';

describe('MultithreadingComponent', () => {
  let component: MultithreadingComponent;
  let fixture: ComponentFixture<MultithreadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultithreadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultithreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
