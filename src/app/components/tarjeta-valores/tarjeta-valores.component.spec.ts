import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaValoresComponent } from './tarjeta-valores.component';

describe('TarjetaValoresComponent', () => {
  let component: TarjetaValoresComponent;
  let fixture: ComponentFixture<TarjetaValoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaValoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
