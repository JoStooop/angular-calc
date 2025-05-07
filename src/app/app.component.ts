import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalcComponent} from './calc-v1/components/calc/calc.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-calc';
}
