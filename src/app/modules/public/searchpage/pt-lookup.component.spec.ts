import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PTLookupComponent } from './pt-lookup.component';

describe('PTLookupComponent', () => {
  let component: PTLookupComponent;
  let fixture: ComponentFixture<PTLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
