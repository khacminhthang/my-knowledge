import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousMethodsComponent } from './anonymous-methods.component';

describe('AnonymousMethodsComponent', () => {
  let component: AnonymousMethodsComponent;
  let fixture: ComponentFixture<AnonymousMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnonymousMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
