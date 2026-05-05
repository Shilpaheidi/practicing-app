import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, forkJoin, interval, switchMap, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // ngOnInit(): void {
  //   const abs = interval(1000).pipe(take(5));
  //   const sub = abs.subscribe(val => console.log(val));
  // }





  // pdfUrls = [
  //   'https://www.ets.org/Media/Tests/TOEFL/pdf/Sample_Letter.pdf', // Formal Letter
  //   'https://un.org/sites/un2.un.org/files/sample_resignation_letter.pdf',
  //   'https://www.writeexpress.com/samples/letter-of-recommendation-sample.pdf',
  //   'https://cdn.adecco.com/media/sample-cover-letter.pdf',
  //   'https://www.thebalancecareers.com/thmb/sample-resignation-letter.pdf',
  //   'https://www.indeed.com/career-advice/finding-a-job/sample-resignation-letter.pdf',
  //   'https://static1.squarespace.com/static/cover-letter-sample.pdf',
  //   'https://jobstars.com/wp-content/uploads/sample-resignation-letter.pdf',
  //   'https://cdn3.hubspot.net/hubfs/sample-formal-letter.pdf',
  //   'https://templates.office.com/en-us/resignation-letter-tm16391853'
  // ];

  // pdfUrls = [
  //   'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  //   'https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf',
  //   'https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf',
  //   'https://www.africau.edu/images/default/sample.pdf',
  //   'https://www.orimi.com/pdf-test.pdf',
  //   'https://www.hq.nasa.gov/alsj/a17/A17_FlightPlan.pdf',
  //   'https://www.ets.org/Media/Tests/TOEFL/pdf/Sample_Letter.pdf',
  //   'https://www.clickdimensions.com/links/TestPDFfile.pdf',
  //   'https://partners.adobe.com/public/developer/en/xml/AdobeXMLFormsSamples.pdf',
  //   'https://research.nhm.org/pdfs/10873/10873.pdf'
  // ];

  pdfUrls = [
    'https://www.orimi.com/pdf-test.pdf',
    'https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf',
    'https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf',
    'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  ];



  displayedColumns: string[] = ['id', 'name', 'age', 'email'];
  data = [
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 32, email: 'jane@example.com' }
  ];
  // title = 'angular-data-access';
  // taskForm!: FormGroup;
  // searchText: string = '';
  // employees = [
  //   { name: 'John Doe', title: 'Software Engineer', email: 'john.doe@example.com' },
  //   { name: 'Jane Smith', title: 'Project Manager', email: 'jane.smith@example.com' },
  //   { name: 'Mike Johnson', title: 'UX Designer', email: 'mike.johnson@example.com' },
  //   { name: 'Emily Davis', title: 'QA Tester', email: 'emily.davis@example.com' }
  // ];
  // tasks: { name: string; completed: boolean }[] = [];

  // constructor(public dialog: MatDialog, private fb: FormBuilder) {

  //   this.taskForm = this.fb.group({

  //     task: ['', Validators.required]
  //   })
  // }

  // ngOnInit(): void {

  //   const savedTasks = localStorage.getItem('tasks');
  //   if (savedTasks) {
  //     this.tasks = JSON.parse(savedTasks);
  //   }


  //   this.identifyOverTimeEntries();
  //   this.consolidateAllDates();

  // }

  // identifyOverTimeEntries() {
  //   const attendanceArray = [
  //     {
  //       employee_id: 11,
  //       attendance_status: {
  //         attendance: [
  //           { ot_status: 'OT', ot_date: '2024-10-01' },
  //           { ot_status: 'NULL', ot_date: '2024-10-02' },
  //         ],
  //       },
  //     },
  //     {
  //       employee_id: 12,
  //       attendance_status: {
  //         attendance: [
  //           { ot_status: 'OT', ot_date: '2024-10-01' },
  //           { ot_status: 'OT', ot_date: '2024-10-03' },
  //         ],
  //       },
  //     },
  //   ];
  //   const OtDatas: any[] = [];

  //   for (let e of attendanceArray) {
  //     for (let a of e.attendance_status.attendance) {
  //       const otDate = a.ot_date;
  //       const otStatus = a.ot_status;
  //       if (a.ot_status == 'OT') {
  //         OtDatas.push(a)
  //       }

  //     }
  //   }


  //   console.log('OtDatas', OtDatas);

  //   // const otDatas = [
  //   //   { ot_status: 'OT', ot_date: '2024-10-01' },
  //   //   { ot_status: 'OT', ot_date: '2024-10-01' },
  //   //   { ot_status: 'OT', ot_date: '2024-10-03' },
  //   // ];


  // }

  // consolidateAllDates() {


  //   const otDatas = [
  //     { ot_date: '2024-10-01', ot_status: 'OT' },
  //     { ot_date: '2024-10-02', ot_status: 'NULL' },
  //   ];

  //   const nonOtDatas = [
  //     { ot_date: '2024-10-01', ot_status: 'NULL' },
  //     { ot_date: '2024-10-02', ot_status: 'NULL' },
  //   ];

  //   const mergeAllDates: any[] = [];

  //   mergeAllDates.push(...otDatas, ...nonOtDatas)

  //   console.log('mergeAllDates', mergeAllDates);


  //   //   const mergeAllDates = [
  //   //     { ot_date: '2024-10-01', ot_status: 'OT' },
  //   //     { ot_date: '2024-10-02', ot_status: 'NULL' },
  //   //     { ot_date: '2024-10-01', ot_status: 'NULL' },
  //   //     { ot_date: '2024-10-02', ot_status: 'NULL' },
  //   // ];


  // }

  // addTasks() {

  //   // console.log('form is valid');
  //   if (this.taskForm.valid) {

  //     console.log('valid', this.taskForm.valid);

  //     const newTask = {
  //       name: this.taskForm.value.task,
  //       completed: false

  //     }
  //     this.tasks.push(newTask);
  //     this.saveTasks();
  //     this.taskForm.reset();
  //   }
  // }

  // toggleComplete(index: number): void {
  //   this.tasks[index].completed = !this.tasks[index].completed;
  //   this.saveTasks();
  // }


  // deleteTasks(index: number): void {
  //   this.tasks.splice(index, 1);
  //   this.saveTasks();
  // }


  // saveTasks(): void {
  //   localStorage.setItem('tasks', JSON.stringify(this.tasks));
  // }

  // openModal(): void {
  //   this.dialog.open(ModalComponent);
  // }

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  private modalRef?: ComponentRef<ModalComponent>;



  createModal() {
    this.container.clear();
    this.modalRef = this.container.createComponent(ModalComponent);

    this.modalRef.instance.title = 'Dynamic Modal';
    this.modalRef.instance.message = 'This is a dynamically created Modal!';

  }

  searchControl = new FormControl();
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.callApis()
    this. getApis()
  }



  callApis() {
    // const api1$ = this.http.get('https://jsonplaceholder.typicode.com/users');
    // const api2$ = this.http.get('https://jsonplaceholder.typicode.com/posts');

    // forkJoin([api1$, api2$]).pipe(
    //   switchMap(([users, posts]) => {
    //     console.log('Users:', users);
    //     console.log('Posts:', posts);

    //     return this.http.get('https://jsonplaceholder.typicode.com/comments');
    //   })
    // ).subscribe(comments => {
    //   console.log('Comments (API3):', comments);
    // });

    const api1$ = this.http.get('https://jsonplaceholder.typicode.com/users');
    const api2$ = this.http.get('https://jsonplaceholder.typicode.com/posts');

    forkJoin([api1$, api2$]).pipe(switchMap((res1, res2) => {
      console.log('api1$,api2$ ', res1, res2);
      return this.http.get('https://jsonplaceholder.typicode.com/comments');
    })
    ).subscribe(res3 => {
      console.log(res3);
    })
  }


 getApis() {

  // API1 & API2
  const userApi$ = this.http.get('https://jsonplaceholder.typicode.com/users');
  const orderApi$ = this.http.get('https://jsonplaceholder.typicode.com/posts');

  forkJoin([userApi$, orderApi$])
    .pipe(
      switchMap((res) => {

        const userRes = res[0];
        const orderRes = res[1];

        console.log('User:', userRes);
        console.log('Order:', orderRes);

        // API3 (POST)
        return this.http.post('https://jsonplaceholder.typicode.com/posts', {
          users: userRes,
          orders: orderRes
        });

      })
    )
    .subscribe((finalRes) => {
      console.log('Final Response:', finalRes);
    });

}

}
// function firstNonRepeatingCharacter(str: any) {
//   const charCount: any = {};
//   let singleCharCount: any = [];

//   for (let char of str) {

//     // console.log('charCount1', charCount);

//     charCount[char] = (charCount[char] || 0) + 1;
//     // console.log('charCount2', charCount);
//   }

//   for (let char of str) {
//     if (charCount[char] === 1) {
//       singleCharCount.push(char)
//       return char;
//     }
//   }


//   return null;
//   // return singleCharCount.length > 0 ? singleCharCount : null;


// }


// function firstnonRepeatingCharacter(str: any) {
//   const charCount: any = {};
//   let singleCharCount: any = [];

//   for (let char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }



// }



// let Input = "javascript";
// console.log('check chars', firstNonRepeatingCharacter(Input));


// function findLongestWord(sentence: string) {
//   // Split the sentence into words by space
//   const words = sentence.split(' ');

//   // console.log('splittingWords',words);


//   let longestWord = '';

//   // Loop through each word
//   for (let word of words) {
//     // If the current word is longer than the longest found so far
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// Test cases
// console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
// console.log(findLongestWord("JavaScript is awesome"));                       // Output: "JavaScript"
// console.log(findLongestWord("This is a simple task"));                       // Output: "simple"



// function firstNonRepeatingCharacter1(str: any) {
//   let charCount: any = {};
//   let allRepeatingChars: any[] = [];

//   for (const char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;

//   }


//   for (const char of str) {
//     if (charCount[char] === 2) {
//       // return char;
//       allRepeatingChars.push(char);
//     }

//   }
//   // return null;
//   return allRepeatingChars.length > 0 ? allRepeatingChars : null;
// }

// let Input = "javascript";
// console.log('check chars', firstNonRepeatingCharacter1(Input));


// function findLongestWord1(str: any) {
//   let splitWord = str.split(' ');
//   let longestWord = '';


//   for (const word of splitWord) {
//     if (word.length > longestWord.length) {


//       longestWord = word;
//     }
//   }

//   return longestWord;
// }
// console.log(findLongestWord1("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
// console.log(findLongestWord1("JavaScript is awesome"));                       // Output: "JavaScript"
// console.log(findLongestWord1("This is a simple task")); 





// function checkPalindrome(str:string){
// let palindromeString = '';

// for (let index = str.length -1 ; index >= 0; index--) {
// //  if (palindromeString.includes(str[index])) {
//   palindromeString += str[index];
// //  }

// }

// return palindromeString === str;
// }

// function checkPalindrome(str: string): boolean {
//   let palindromeString = '';

//   // Clean the input string: lower case and only alphanumeric characters
//   const cleanedStr = str.toLowerCase().split('').filter(char => {
//     const code = char.charCodeAt(0);

//     console.log('code', code);

//     return (code >= 97 && code <= 122) || (code >= 48 && code <= 57); // a-z and 0-9
//   }).join('');

//   // Build the reversed string
//   for (let index = cleanedStr.length - 1; index >= 0; index--) {
//     palindromeString += cleanedStr[index];
//   }


//   // console.log('palindromeString',palindromeString);
//   // console.log('cleanedStr', cleanedStr);

//   // Compare the cleaned original string with the reversed string
//   return palindromeString === cleanedStr;
// }

// Test cases
// console.log(checkPalindrome("A man, a plan, a canal, Panama")); // true
// console.log(checkPalindrome("racecar")); // true
// console.log(checkPalindrome("hello")); // false

// function lengthOfLongestSubstring(s: string | any[]) {
//   let charMap = new Map();
//   let maxLength = 0;
//   let start = 0;

//   for (let end = 0; end < s.length; end++) {
//     if (charMap.has(s[end])) {
//       start = Math.max(charMap.get(s[end]) + 1, start);
//     }
//     console.log('start', start);
//     console.log('charMap', charMap);
//     charMap.set(s[end], end);
//     maxLength = Math.max(maxLength, end - start + 1);
//   }

//   return maxLength;
// }

// // Test the function
// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
// console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
// console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3

// function reversAString(str: any) {

//   let reverseString = str.split('').reverse().join('');

//   return reverseString;
// }

// // console.log(reversAString("hello"));      // Output: "olleh"
// // console.log(reversAString("javascript")); // Output: "tpircsavaj"

// function findLargestNumber(num: any) {
//   let largestNumber = 0;

//   for (let index = 0; index < num.length; index++) {

//     if (num[index] > largestNumber) {
//       largestNumber = num[index];
//     }
//   }


//   return largestNumber;


// }





// console.log(findLargestNumber([1, 5, 3, 9, 2])); // Output: 9
// console.log(findLargestNumber([10, 4, 7, 22, 15])); // Output: 22

// function sumArray(arr: any) {
//   let sum = 0;

//   for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];

//   }

//   return sum;
// }

// // console.log(sumArray([1, 2, 3, 4, 5]));  // Output: 15
// // console.log(sumArray([10, 20, 30, 40])); // Output: 100


// function countVowels(str: any): number {
//   let count = 0;
//   let vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

//   // Convert str to string in case it's not a string type
//   str = str.toString().toLowerCase();

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// }

// // Test the function
// console.log(countVowels("hello"));       // Output: 2
// console.log(countVowels("JavaScript"));  // Output: 3



// function removeDuplicates(arr: string | any[]) {
//   const uniqueArray: any[] = [];  // Create an empty array for unique values

//   for (let i = 0; i < arr.length; i++) {
//     // Check if the element is not already in the uniqueArray
//     if (!uniqueArray.includes(arr[i])) {
//       uniqueArray.push(arr[i]);  // Add it to the uniqueArray
//     }
//   }

//   return uniqueArray;
// }

// // Test the function
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));             // Output: [1, 2, 3, 4, 5]
// console.log(removeDuplicates(["apple", "banana", "apple", "orange"])); // Output: ["apple", "banana", "orange"]




