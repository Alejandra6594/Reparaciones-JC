import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSpyComponent } from './navbar-spy.component';

describe('NavbarSpyComponent', () => {
  let component: NavbarSpyComponent;
  let fixture: ComponentFixture<NavbarSpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSpyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
