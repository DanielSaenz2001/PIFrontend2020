import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgradoDocumentosComponent } from './postgrado-documentos.component';

describe('PostgradoDocumentosComponent', () => {
  let component: PostgradoDocumentosComponent;
  let fixture: ComponentFixture<PostgradoDocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostgradoDocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgradoDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
