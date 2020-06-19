import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEgresadosComponent } from './buscar-egresados.component';

describe('BuscarEgresadosComponent', () => {
  let component: BuscarEgresadosComponent;
  let fixture: ComponentFixture<BuscarEgresadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarEgresadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarEgresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
