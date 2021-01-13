import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BottomComponent } from './bottom.component';

describe('BottomComponent', () => {
  let component: BottomComponent;
  let fixture: ComponentFixture<BottomComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
