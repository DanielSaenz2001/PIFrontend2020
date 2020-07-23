import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarExpeComponent } from './validar-expe.component';

describe('ValidarExpeComponent', () => {
  let component: ValidarExpeComponent;
  let fixture: ComponentFixture<ValidarExpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarExpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarExpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
