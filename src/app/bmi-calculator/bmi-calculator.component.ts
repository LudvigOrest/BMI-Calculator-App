import { Component, NgModule } from '@angular/core';
import { BmiService, userBmi } from '../bmi.service';

@Component({
  selector: 'app-ibm-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent {
  constructor(private user: BmiService) { console.log(this.user.userA); };
  currentUser: userBmi = this.user.userA;
  height: number = 0;
  weight: number = 0;
  bmi: number = 0;

  testF(input: Event): void {
    console.log(input);
    console.log(this.height);
    console.log(this.weight);
  }

  calculate(): void {
    this.currentUser.setLength(this.height);
    this.currentUser.setWeight(this.weight);
    this.bmi = Math.round((this.currentUser.getBmi(this.height, this.weight))*10)/10;
  }
}
