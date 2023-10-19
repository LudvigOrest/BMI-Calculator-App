import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalculatorComponent } from './bmi-calculator.component';

describe('IbmCalculatorComponent', () => {
  let component: BmiCalculatorComponent;
  let fixture: ComponentFixture<BmiCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BmiCalculatorComponent]
    });
    fixture = TestBed.createComponent(BmiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
