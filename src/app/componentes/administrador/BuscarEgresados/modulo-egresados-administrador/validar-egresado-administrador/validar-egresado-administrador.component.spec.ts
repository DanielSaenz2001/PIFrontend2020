import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarEgresadoAdministradorComponent } from './validar-egresado-administrador.component';

describe('ValidarEgresadoAdministradorComponent', () => {
  let component: ValidarEgresadoAdministradorComponent;
  let fixture: ComponentFixture<ValidarEgresadoAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarEgresadoAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarEgresadoAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
