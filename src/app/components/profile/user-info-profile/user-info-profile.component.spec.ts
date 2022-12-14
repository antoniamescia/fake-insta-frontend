import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoProfileComponent } from './user-info-profile.component';

describe('UserInfoProfileComponent', () => {
  let component: UserInfoProfileComponent;
  let fixture: ComponentFixture<UserInfoProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
