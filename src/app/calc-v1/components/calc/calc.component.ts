import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-calc',
  imports: [
    FormsModule
  ],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss'
})
export class CalcComponent {
  public operations: string[] = ['+', '-', '*', '/']
  public selectOperation: string = this.operations[0]

  public first: number = 1
  public second: number = 1
  public result?: number

  public showCalcResult() {
    switch (this.selectOperation) {
      case '+':
        this.result = this.first + this.second
        break
      case '-':
        this.result = this.first - this.second
        break
      case '*':
        this.result = this.first * this.second
        break
      case '/':
        this.result = this.first / this.second
        break
      default:
        break
    }
  }
}

// [value]="first"  - только читать
// [(ngModel)]="first"  - читать и изменять

// result?: number
// result: number | undefined = undefined
