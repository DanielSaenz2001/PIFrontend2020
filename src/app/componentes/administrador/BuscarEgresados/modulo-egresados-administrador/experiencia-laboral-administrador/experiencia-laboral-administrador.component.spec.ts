import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaLaboralAdministradorComponent } from './experiencia-laboral-administrador.component';

describe('ExperienciaLaboralAdministradorComponent', () => {
  let component: ExperienciaLaboralAdministradorComponent;
  let fixture: ComponentFixture<ExperienciaLaboralAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienciaLaboralAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaLaboralAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
