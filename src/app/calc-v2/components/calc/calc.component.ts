import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

interface CalcValue {
  value: number;
}

interface CalcGroupValue {
  first: CalcValue;
  second: CalcValue;
  operation: string;
}

@Component({
  selector: 'app-calc',
  imports: [FormsModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss'
})
export class CalcComponent {
  public calcOperations: string[] = ['+', '-', '*', '/']
  public result?: number

  public calcGroup: CalcGroupValue = {
    first: {value: 1},
    second: {value: 1},
    operation: this.calcOperations[0]
  }

  public showCalcResult() {
    const first = this.calcGroup.first.value;
    const second = this.calcGroup.second.value;
    const operation = this.calcGroup.operation;

    switch (operation) {
      case '+':
        this.result = first + second;
        break;
      case '-':
        this.result = first - second;
        break;
      case '*':
        this.result = first * second;
        break;
      case '/':
        this.result = first / second
        break
      default:
        break
    }
  }
}
