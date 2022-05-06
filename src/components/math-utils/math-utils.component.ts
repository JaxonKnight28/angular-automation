import { Component } from '@angular/core';
import { MathUtilService } from '../../services/MathUtil.service';

@Component({
  selector: 'math-utils',
  templateUrl: './math-utils.component.html',
  styleUrls: ['./math-utils.component.css']
})
export class MathUtilsComponent {
  constructor(private mathUtil: MathUtilService) { }

  addFirstValue: number = 0;
  addSecondValue: number = 0;
  addedValue: number = 0;

  add = function (firstValue: number, secondValue: number) {
    this.addedValue = this.mathUtil.add(firstValue, secondValue);
  }

}
