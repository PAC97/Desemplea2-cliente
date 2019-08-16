import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioFormComponent } from './tipousuario-form.component';

describe('TipousuarioFormComponent', () => {
  let component: TipousuarioFormComponent;
  let fixture: ComponentFixture<TipousuarioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipousuarioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipousuarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
