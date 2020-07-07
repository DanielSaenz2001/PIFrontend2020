import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaDocumentoComponent } from './experiencia-documento.component';

describe('ExperienciaDocumentoComponent', () => {
  let component: ExperienciaDocumentoComponent;
  let fixture: ComponentFixture<ExperienciaDocumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienciaDocumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
