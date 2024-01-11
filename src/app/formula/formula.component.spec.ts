import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaComponent } from './formula.component';

describe('FormulaComponent', () => {
  let component: FormulaComponent;
  let fixture: ComponentFixture<FormulaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaComponent]
    });
    fixture = TestBed.createComponent(FormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe regresar el resultado correcto', () => {
    component.base = 5;
    component.altura = 8;

    const resultado = component.calcularAreaTest();
    expect(resultado).toEqual(20);
  });

});
