import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PtActivityComponent } from './pt-activity.component';

describe('PtActivityComponent', () => {
  let component: PtActivityComponent;
  let fixture: ComponentFixture<PtActivityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PtActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
