import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCatComponent } from './manage-cat.component';

describe('ManageCatComponent', () => {
  let component: ManageCatComponent;
  let fixture: ComponentFixture<ManageCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
