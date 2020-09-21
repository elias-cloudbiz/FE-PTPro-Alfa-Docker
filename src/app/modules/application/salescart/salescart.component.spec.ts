import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { salesCartComponent } from './salescart.component';

describe('HealthcartComponent', () => {
  let component: salesCartComponent;
  let fixture: ComponentFixture<salesCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ salesCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(salesCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
