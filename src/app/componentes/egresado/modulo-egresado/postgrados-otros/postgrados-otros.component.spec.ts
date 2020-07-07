import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgradosOtrosComponent } from './postgrados-otros.component';

describe('PostgradosOtrosComponent', () => {
  let component: PostgradosOtrosComponent;
  let fixture: ComponentFixture<PostgradosOtrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostgradosOtrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgradosOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
