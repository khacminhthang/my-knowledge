import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStoreFetureCreatorsComponent } from './ngrx-store-feture-creators.component';

describe('NgrxStoreFetureCreatorsComponent', () => {
  let component: NgrxStoreFetureCreatorsComponent;
  let fixture: ComponentFixture<NgrxStoreFetureCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxStoreFetureCreatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxStoreFetureCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
