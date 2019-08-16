import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPublicacionesComponent } from './form-publicaciones.component';

describe('FormPublicacionesComponent', () => {
  let component: FormPublicacionesComponent;
  let fixture: ComponentFixture<FormPublicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPublicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
