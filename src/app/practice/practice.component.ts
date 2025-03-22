import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent {

}

// function isPalindrome(str: string) {
//   const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   const reversedStr = cleanedStr.split("").reverse().join("");
//   return cleanedStr === reversedStr;
// }
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
// console.log(isPalindrome("hello")); // false
// console.log(isPalindrome("Madam"));



function findLargestWord(words: string) {
  const cleanedWords = words.replace(/[^a-zA-Z\s]/g, "");
  let checkLongestWord = cleanedWords.split(" ");
  let longestWord = '';
  for (let index = 0; index < checkLongestWord.length; index++) {
    if (checkLongestWord[index].length > longestWord.length) {
      longestWord = checkLongestWord[index];
    }
  }
  return longestWord;
}
console.log('longestword',findLargestWord("The quick brown fox jumped over the lazy dog."));







// findLongestWord("The quick brown fox jumped over the lazy dog.")



// Write a JavaScript function called fizzBuzz that prints numbers from 1 to 100 with the following rules:

// For multiples of 3, print "Fizz" instead of the number.
// For multiples of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".
// If the number is not a multiple of 3 or 5, print the number itself.
// Requirements:

// The function should not return anything; it should log the output to the console.

// function fizzBuzz(first:number,last:number) {

// for (let i = first; i <= last; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');

//   }else if(i % 3 === 0){
//     console.log('Fizz');
//   }else if(i % 5 === 0){
//     console.log('Buzz');
//   }else{
//     console.log(i);
//   }

// }
// }
// fizzBuzz(1,40);
// function removeDuplicatesAndSort(numbers: number[]): number[] {
//   // Step 1: Remove duplicates by using a Set
//   const uniqueNumbers = [...new Set(numbers)];

//   // Step 2: Sort the array in ascending order
//   uniqueNumbers.sort((a, b) => a - b); // Numerical sorting

//   // Step 3: Return the sorted array
//   return uniqueNumbers;
// }

// // Example usage:
// const numbers = [5, 3, 8, 3, 1, 5, 7, 2];
// console.log(removeDuplicatesAndSort(numbers)); // Output: [1, 2, 3, 5, 7, 8]

// function removeDuplicatesFromArrayAndSor(numbers:number[]) {
//   const uniqueNumbers = [...new Set(numbers)];
//   uniqueNumbers.sort((a,b)=> b - a);

//   return uniqueNumbers;
// }

// // Example usage:
// const numbers = [5, 3, 8, 3, 1, 5, 7, 2];
// console.log('removeDuplicates',removeDuplicatesFromArrayAndSor(numbers));


//Find the Second Largest Number in an Array

// function findSecondLargestNumber(num: number[]) {

//   if (num.length < 2 ) {
//     return  null;
//   }
//   let largestNumber = -Infinity;
//   let secondLargestNumber = -Infinity;

//   for (let index = 0; index < num.length; index++) {
//     if (num[index] > largestNumber) {
//       largestNumber =  num[index];
//       secondLargestNumber =  largestNumber;
//     }else if (num[index] > largestNumber && num[index] != largestNumber) {
//       secondLargestNumber =  num[index];
//     }

//   }
//   return secondLargestNumber;
// }

// console.log(findSecondLargestNumber([5, 3, 8, 1, 7])); // Output: 7
// console.log(findSecondLargestNumber([10, 20])); // Output: 10
// console.log(findSecondLargestNumber([1])); // Output: null


function findSecondLargestNumber(nums: number[]) {
  if (nums.length < 2 ) {
    return  null;
  }
  let largestNumber = -Infinity;
  let secondLargestNumber = -Infinity;
  for (let index = 0; index < nums.length; index++) {

    if (nums[index] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = nums[index];
    } else if (nums[index] > secondLargestNumber && nums[index] !== largestNumber) {
      secondLargestNumber = nums[index];
    }
  }

  return secondLargestNumber;

}

console.log(findSecondLargestNumber([5, 3, 8, 1,8, 7])); // Output: 7
console.log(findSecondLargestNumber([10, 20])); // Output: 10
console.log(findSecondLargestNumber([1])); // Output: null

// function reverseSentence(sentence:String){

//  let reversedSentence = sentence.split(" ").reverse().join(" ");
//  return reversedSentence;
// }

// console.log(reverseSentence("The quick brown fox jumps over the lazy dog"));

// function countWordFrequency(sentence:any){
//   // Step 1: Convert the string to lowercase to ensure case insensitivity
//   const lowerCaseSentence = sentence.toLowerCase();


//   // Step 2: Remove punctuation using a regular expression
//   const cleanedSentence =  lowerCaseSentence.replace(/[^\w\s]/g, "");

//   // Step 3: Split the sentence into words
//   const words =  cleanedSentence.split(" ");

//   // Step 4: Initialize an empty object to store word frequencies
//   const wordCount:any={};

//   // Step 5: Loop through the words and count their occurrences
//   for(const word of words ){
//       if(word in wordCount){
//           wordCount[word]++
//       }else{
//         wordCount[word] = 1;
//       }
//   }

//   return wordCount;

// }
// const sentence = "The quick brown fox jumps over the lazy dog. The dog was not amused.";
// console.log('sentence',countWordFrequency(sentence));