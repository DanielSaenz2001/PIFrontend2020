import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPostgradoDocumentosComponent } from './ver-postgrado-documentos.component';

describe('VerPostgradoDocumentosComponent', () => {
  let component: VerPostgradoDocumentosComponent;
  let fixture: ComponentFixture<VerPostgradoDocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPostgradoDocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPostgradoDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
