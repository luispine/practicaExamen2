import { Component } from '@angular/core';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent {

  base: number = 0;
  altura: number = 0;
  resultado: number = 0;


  calcularAreaTest(): number {
    return(this.base * this.altura)/2;
  }

}
