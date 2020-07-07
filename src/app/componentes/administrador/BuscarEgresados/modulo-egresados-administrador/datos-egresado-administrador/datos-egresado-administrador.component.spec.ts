import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEgresadoAdministradorComponent } from './datos-egresado-administrador.component';

describe('DatosEgresadoAdministradorComponent', () => {
  let component: DatosEgresadoAdministradorComponent;
  let fixture: ComponentFixture<DatosEgresadoAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosEgresadoAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosEgresadoAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
