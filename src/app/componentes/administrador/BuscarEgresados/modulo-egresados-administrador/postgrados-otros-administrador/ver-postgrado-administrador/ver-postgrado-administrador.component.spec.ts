import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPostgradoAdministradorComponent } from './ver-postgrado-administrador.component';

describe('VerPostgradoAdministradorComponent', () => {
  let component: VerPostgradoAdministradorComponent;
  let fixture: ComponentFixture<VerPostgradoAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPostgradoAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPostgradoAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
