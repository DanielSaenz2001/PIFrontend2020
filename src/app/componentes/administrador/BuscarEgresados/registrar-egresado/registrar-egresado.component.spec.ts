import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEgresadoComponent } from './registrar-egresado.component';

describe('RegistrarEgresadoComponent', () => {
  let component: RegistrarEgresadoComponent;
  let fixture: ComponentFixture<RegistrarEgresadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarEgresadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarEgresadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
