import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDatosPersonalesAdministradorComponent } from './actualizar-datos-personales.component';

describe('ActualizarDatosPersonalesAdministradorComponent', () => {
  let component: ActualizarDatosPersonalesAdministradorComponent;
  let fixture: ComponentFixture<ActualizarDatosPersonalesAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarDatosPersonalesAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarDatosPersonalesAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
