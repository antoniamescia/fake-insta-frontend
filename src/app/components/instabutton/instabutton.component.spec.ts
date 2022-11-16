import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstabuttonComponent } from './instabutton.component';

describe('InstabuttonComponent', () => {
  let component: InstabuttonComponent;
  let fixture: ComponentFixture<InstabuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstabuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstabuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
