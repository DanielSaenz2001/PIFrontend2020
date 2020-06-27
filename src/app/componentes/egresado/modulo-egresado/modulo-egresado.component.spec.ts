import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloEgresadoComponent } from './modulo-egresado.component';

describe('ModuloEgresadoComponent', () => {
  let component: ModuloEgresadoComponent;
  let fixture: ComponentFixture<ModuloEgresadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloEgresadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloEgresadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
