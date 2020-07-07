import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgradosOtrosAdministradorComponent } from './postgrados-otros-administrador.component';

describe('PostgradosOtrosAdministradorComponent', () => {
  let component: PostgradosOtrosAdministradorComponent;
  let fixture: ComponentFixture<PostgradosOtrosAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostgradosOtrosAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgradosOtrosAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
