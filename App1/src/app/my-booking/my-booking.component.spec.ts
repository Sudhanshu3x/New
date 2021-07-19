import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MYBookingComponent } from './my-booking.component';

describe('MYBookingComponent', () => {
  let component: MYBookingComponent;
  let fixture: ComponentFixture<MYBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MYBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MYBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
