import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { TextboxesComponent } from '../textboxes/textboxes.component';

@Component({
  selector: 'app-calculator',
  imports: [TextboxesComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
  providers: [CalculatorService]
})
export class CalculatorComponent implements OnInit  {
  result: number = 0;

  ngOnInit(): void {
    this.result = 0;
  } 
}
