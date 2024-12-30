import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../calculator.service';
import { HasRoleDirective } from '../../feature/has-role.directive';


@Component({
  selector: 'app-textboxes',
  standalone: true,
  imports: [FormsModule, HasRoleDirective],
  templateUrl: './textboxes.component.html',
  styleUrl: './textboxes.component.scss'
})
export class TextboxesComponent {
     
  @Input() firstNumber!: 0;  
  @Input()secondNumber!: 0;

  @Input() result: Number | null = null; 

  constructor(private calculationService: CalculatorService) { }

  addNumbers() {
    this.result = this.calculationService.add(this.firstNumber, this.secondNumber);
  }
  subtractNumbers() {
    this.result = this.calculationService.subtract(this.firstNumber, this.secondNumber);
  }
  multiplyNumbers() {
    this.result = this.calculationService.multiply(this.firstNumber, this.secondNumber);
  }
  divideNumbers() {
    this.result = this.calculationService.divide(this.firstNumber, this.secondNumber);
  }
  percentageNumbers() {
    this.result = this.calculationService.modulo(this.firstNumber, this.secondNumber);
  }
  role: string = 'admin';
}



