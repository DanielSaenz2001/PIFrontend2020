import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarEgresadoComponent } from './validar-egresado.component';

describe('ValidarEgresadoComponent', () => {
  let component: ValidarEgresadoComponent;
  let fixture: ComponentFixture<ValidarEgresadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarEgresadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarEgresadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
