import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formula } from './formula.component';

describe('Formula', () =>{
  it('debe regresar el resultado correcto', () => {
    expect(Formula(5, 8)).toEqual(20);
  });

});
