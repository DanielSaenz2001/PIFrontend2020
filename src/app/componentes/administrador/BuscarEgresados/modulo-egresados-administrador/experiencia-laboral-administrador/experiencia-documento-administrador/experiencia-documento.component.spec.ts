import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaDocumentoAdministradorComponent } from './experiencia-documento.component';

describe('ExperienciaDocumentoAdministradorComponent', () => {
  let component: ExperienciaDocumentoAdministradorComponent;
  let fixture: ComponentFixture<ExperienciaDocumentoAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienciaDocumentoAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaDocumentoAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
