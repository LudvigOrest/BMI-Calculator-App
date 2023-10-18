import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbmCalculatorComponent } from './ibm-calculator.component';

describe('IbmCalculatorComponent', () => {
  let component: IbmCalculatorComponent;
  let fixture: ComponentFixture<IbmCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IbmCalculatorComponent]
    });
    fixture = TestBed.createComponent(IbmCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
