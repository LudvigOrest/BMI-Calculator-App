import { Injectable } from '@angular/core';

export class userBmi {
  private length: number;
  private weight: number;

  constructor(length: number, weight: number) {
    this.length = length;
    this.weight = weight;
  }

  getBmi(length: number, weight: number): number {
    return ((weight/length)/length)*10000;
  }

  setLength(value: number): void {
    this.length = value;
  }

  setWeight(value: number): void {
    this.weight = value;
  }
}

@Injectable({
  providedIn: 'root'
})
export class BmiService {
  constructor() { }
  userA: userBmi = new userBmi(175, 80);
}
