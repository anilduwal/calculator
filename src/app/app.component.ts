import { Component } from '@angular/core';
import { CalculatorComponent } from './pages/calculator/calculator.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
}
  