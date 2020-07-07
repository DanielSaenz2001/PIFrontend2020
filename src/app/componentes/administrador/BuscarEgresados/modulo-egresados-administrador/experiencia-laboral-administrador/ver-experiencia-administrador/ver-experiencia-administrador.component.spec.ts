import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerExperienciaAdministradorComponent } from './ver-experiencia-administrador.component';

describe('VerExperienciaAdministradorComponent', () => {
  let component: VerExperienciaAdministradorComponent;
  let fixture: ComponentFixture<VerExperienciaAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerExperienciaAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerExperienciaAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
