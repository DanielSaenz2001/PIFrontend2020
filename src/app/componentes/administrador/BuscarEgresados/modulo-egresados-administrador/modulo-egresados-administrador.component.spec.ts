import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloEgresadosAdministradorComponent } from './modulo-egresados-administrador.component';

describe('ModuloEgresadosAdministradorComponent', () => {
  let component: ModuloEgresadosAdministradorComponent;
  let fixture: ComponentFixture<ModuloEgresadosAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloEgresadosAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloEgresadosAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
