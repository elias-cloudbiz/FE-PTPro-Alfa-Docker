import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClientprofileComponent } from './clientprofile.component';

describe('ClientprofileComponent', () => {
  let component: ClientprofileComponent;
  let fixture: ComponentFixture<ClientprofileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
