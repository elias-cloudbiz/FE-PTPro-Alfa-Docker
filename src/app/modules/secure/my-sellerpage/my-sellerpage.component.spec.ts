import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySellerPageComponent } from './my-sellerpage.component';

describe('MyDetailsComponent', () => {
  let component: MySellerPageComponent;
  let fixture: ComponentFixture<MySellerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySellerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySellerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
