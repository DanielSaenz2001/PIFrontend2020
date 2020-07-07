import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgradoDocumentosAdministradorComponent } from './postgrado-documentos.component';

describe('PostgradoDocumentosAdministradorComponent', () => {
  let component: PostgradoDocumentosAdministradorComponent;
  let fixture: ComponentFixture<PostgradoDocumentosAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostgradoDocumentosAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgradoDocumentosAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
