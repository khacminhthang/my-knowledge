import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStoreActionGroupsComponent } from './ngrx-store-action-groups.component';

describe('NgrxStoreActionGroupsComponent', () => {
  let component: NgrxStoreActionGroupsComponent;
  let fixture: ComponentFixture<NgrxStoreActionGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxStoreActionGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxStoreActionGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
