import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioListComponent } from './tipousuario-list.component';

describe('TipousuarioListComponent', () => {
  let component: TipousuarioListComponent;
  let fixture: ComponentFixture<TipousuarioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipousuarioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipousuarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
