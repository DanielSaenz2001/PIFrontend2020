import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentaComponent } from './comenta.component';

describe('ComentaComponent', () => {
  let component: ComentaComponent;
  let fixture: ComponentFixture<ComentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
