import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  currentInput: string = '0'; // Holds the current input displayed on the calculator
  operator: string | null = null; // Holds the selected operator
  firstOperand: number | null = null; // Stores the first operand
  isSecondOperand: boolean = false; // Indicates if the current input is the second operand

  // Handle number and decimal inputs
  handleNumber(value: string): void {
    console.log('check value', value);

    if (this.isSecondOperand) {
      this.currentInput = value; // Start new input for second operand
      this.isSecondOperand = false;
    } else {
      console.log('value', this.currentInput );
      console.log('this.currentInput + value', this.currentInput + value);

      this.currentInput = this.currentInput === '0' ? value : this.currentInput + value;
    }
  }

  // Handle operator inputs
  handleOperator(op: string): void {
    console.log('operator', op);
    if (this.operator && this.isSecondOperand) {
      this.operator = op; // Update operator if already in process
      return;
    }

    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.currentInput); // Store the first operand
    } else if (this.operator) {
      this.firstOperand = this.calculate(this.firstOperand, parseFloat(this.currentInput), this.operator);
    }

    this.operator = op;
    this.isSecondOperand = true;
  }

  // Calculate result
  handleEquals(): void {
    if (this.operator && this.firstOperand !== null) {
      this.currentInput = String(this.calculate(this.firstOperand, parseFloat(this.currentInput), this.operator));
      this.firstOperand = null;
      this.operator = null;
      this.isSecondOperand = false;
    }
  }

  // Clear calculator state
  clear(): void {
    this.currentInput = '0';
    this.firstOperand = null;
    this.operator = null;
    this.isSecondOperand = false;
  }

  // Perform calculations
  private calculate(first: number, second: number, op: string): number {
    console.log('this is form Calculate method',first,second,op);
    
    switch (op) {
      case '+': return first + second;
      case '-': return first - second;
      case '*': return first * second;
      case '/': return second !== 0 ? first / second : 0; // Avoid division by zero
      case '%': return first % second;
      default: return second;
    }
  }



  // ---------------------------------Practice--------------------------------------------------------//
  // handleOperator(op: string) {

  //   console.log('op', op);
  //   if (this.operator == null) {
  //     this.operator = op;
  //   } else if (this.currentInput !== '0') {
  //     this.firstOperand = Number(this.currentInput);
  //   }

  // }
  // handleEquals() {
  //   this.calculate(Number( this.currentInput),Number(this.secondInput),this.operator)
  // }

  // handleNumber(num: string) {
  //   console.log('num', num);

  //   if (this.operator && this.currentInput) {
  //     this.isSecondOperand = true;
  //     this.secondInput = this.secondInput == '0' ? num : this.secondInput +  num;
  //     this.calculate(Number( this.currentInput),Number(this.secondInput),this.operator)
  //   }else{

  //     this.currentInput = this.currentInput == '0' ? num : this.currentInput + num;
  //   }

  // }



  // calculate(first:number,second:number,operator:string | null){

  //   switch (operator) {
  //     case '+': return first + second;
  //     case '-': return first - second;
  //     case '*': return first * second;
  //     case '/': return second !== 0 ? first / second : 0;
  //     case '%': return first % second;
  //     default: return second;
        
  //     }
  //   }

        
        
    
}

// https://chatgpt.com/c/67473e4e-1c64-8005-900b-2e52bea61774
// https://chatgpt.com/c/67473e4e-1c64-8005-900b-2e52bea61774