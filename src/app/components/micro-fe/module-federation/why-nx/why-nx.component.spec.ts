import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyNxComponent } from './why-nx.component';

describe('WhyNxComponent', () => {
  let component: WhyNxComponent;
  let fixture: ComponentFixture<WhyNxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyNxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyNxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
