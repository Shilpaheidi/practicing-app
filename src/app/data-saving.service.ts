import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSavingService {

  private messageSource =  new BehaviorSubject<string>('');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message:string){
    this.messageSource.next(message);
  }


}

// function counter() {
//   let count = 0;
//   return function() {
//       count++;
//       return count;
//   };
// }

// const increment = counter();
// console.log(increment()); // 1
// console.log(increment()); // 2


// function findMissingNumber(arr: any ){

//   let n = arr.length;

//   const totalSum =(n *(n+1)) / 2;

//   const arraySum =  arr.reduce((sum: any,num: any)=> sum + num, 0);
    
//   return totalSum - arraySum;

// }


// let arrayOfNumbers = [9,6,1];
// console.log('arrayOfNumbers', findMissingNumber(arrayOfNumbers));


function findMissingNumber(arr: number[]) {
  let min = Math.min(...arr);  // Find the minimum number in the array
  console.log('min',min);
  
  let max = Math.max(...arr);  // Find the maximum number in the array
  console.log('max',max);
  // Calculate the sum of all numbers between min and max
  const totalSum = ((max * (max + 1)) / 2) - ((min * (min - 1)) / 2);
  console.log('totalSum',totalSum);
  // Calculate the sum of the numbers in the array
  const arraySum = arr.reduce((sum, num) => sum + num, 0);

  // Return the missing number
  return totalSum - arraySum;
}

let arrayOfNumbers = [11, 13, 14, 15, 16];
console.log('Missing number:', findMissingNumber(arrayOfNumbers));  // Output: 12



function debounce(func: any,delay: any){
let timeout;

}
