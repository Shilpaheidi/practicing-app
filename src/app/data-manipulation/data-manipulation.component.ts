import { Component } from '@angular/core';

@Component({
  selector: 'app-data-manipulation',
  templateUrl: './data-manipulation.component.html',
  styleUrls: ['./data-manipulation.component.scss']
})
export class DataManipulationComponent {

}
// const employees = [
//   { name: "Alice", age: 25, salary: 3000 },
//   { name: "Bob", age: 35, salary: 4000 },
//   { name: "Charlie", age: 45, salary: 5000 },
//   { name: "David", age: 29, salary: 3500 },
//   { name: "Eve", age: 42, salary: 4500 },
// ];


// const olderThan30 = employees
// .filter(employee => employee.age > 30) // Keep only employees older than 30
// .map(employee => employee.name); // Extract their names

// console.log("Employees older than 30:", olderThan30);


// const updatedEmployees = employees.map(employee => {
//   return {
//     ...employee, // Copy all existing properties
//     isSenior: employee.age > 40 // Add isSenior: true if age > 40, otherwise false
//   };
// });

// console.log("Employees with isSenior property:", updatedEmployees);




// const sortBySalary = [...updatedEmployees].sort((a,b)=>a.salary - b.salary);

// console.log("sortBySalary:", sortBySalary);


// // Task 2: Working with Objects and Arrays

// const books = [
//   { title: "The Catcher in the Rye", author: "J.D. Salinger", published: 1951, rating: 4.5 },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", published: 1960, rating: 4.7 },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", published: 1925, rating: 4.3 },
//   { title: "The Da Vinci Code", author: "Dan Brown", published: 2003, rating: 4.2 },
//   { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", published: 1997, rating: 4.8 },
//   { title: "The Hunger Games", author: "Suzanne Collins", published: 2008, rating: 4.6 }
// ];

// // Extract the titles of books published after the year 2000.
// const bookTitles =  books.filter(book=>book.published > 2000).map(book=>book.title);
// console.log('An array of book titles published after the year 2000 is:', bookTitles);

// // Task 2: Find the book with the highest rating.
// const highestRatedBook = books.reduce((max, book) => {
//   return (book.rating > max.rating) ? book : max;
// }, books[0]);
// console.log('The book with the highest rating is:', highestRatedBook);

// // Task 3: Create a new array with a shortTitle property.
// const booksWithShortTitle = books.map(book => ({
//   ...book,
//   shortTitle: book.title.length > 10 ? book.title.slice(0, 10) : book.title
// }));
// console.log('Books with shortTitle:', booksWithShortTitle);

// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
//   { id: 2, name: "Headphones", category: "Electronics", price: 150 },
//   { id: 3, name: "Chair", category: "Furniture", price: 250 },
//   { id: 4, name: "Sofa", category: "Furniture", price: 500 },
//   { id: 5, name: "Smartphone", category: "Electronics", price: 800 },
//   { id: 6, name: "Table", category: "Furniture", price: 300 }
// ];

// Filter products that are in the "Electronics" category

// const filterProducts = products.filter((product)=>product.category == "Electronics");
// console.log('filterProducts', filterProducts);

// Calculate the total price of all products in the "Electronics" category.

// const totalPrice = products
//   .filter(product => product.category === "Electronics")  // Step 1: Filter products
//   .reduce((total, product) => total + product.price, 0);  // Step 2 & 3: Sum the prices using reduce

// console.log("Total price of electronics:", totalPrice);
// // Calculate the total price of all products in the "Electronics" category.
// const CalculatePrice = products.filter((product)=>product.category == "Electronics").reduce((total,product)=>total + product.price,0);



// Find the most expensive product in the "Furniture" category.
// const mostExpensiveFurniture = products
//   .filter(product => product.category === "Furniture")
//   .reduce((max, product) => (product.price > max.price ? product : max));

//   console.log('mostExpensiveFurniture',mostExpensiveFurniture);

// Create a new array that includes a discountedPrice property for each product, where a 10% discount is applied to the price.

// To calculate the discount value (how much to subtract), you simply multiply the original price by the discount percentage:
// discount = original price * (discount percentage / 100)

// To calculate the final price (after applying the discount), you subtract the discount portion from 1:
// final price = original price * (1 - discount percentage / 100)
// const addedDiscountPrice = products.map((product)=>{
//     return{...product,discount:(product.price * 0.9).toFixed(2)}
// });

// console.log('addedDiscountPrice',addedDiscountPrice);

// const mixedProducts = [
//   { category: "Clothing", name: "Shirt", price: 30 },
//   { category: "Clothing", name: "Jeans", price: 50 },
//   { category: "Electronics", name: "Phone", price: 500 },
//   { category: "Clothing", name: "Jacket", price: 100 },
//   { category: "Furniture", name: "Sofa", price: 400 }
// ];

// Create a new array that contains only the products in the "Clothing" category.

// const clothingCategory =  mixedProducts.filter((product)=>product.category == "Clothing")
// console.log('clothingCategory', clothingCategory);



// Calculate the average price of the products in the "Clothing" category.

// const  totalProducts =  clothingCategory.reduce((total,product)=> total + product.price, 0);
// const average =  totalProducts / clothingCategory.length;

// console.log('average',average);

// Add a discountedPrice property to each product in the "Clothing" category, applying a 15% discount.

// const addDiscountToClothingCategory =  clothingCategory.map((product)=>{
//  return { ...product,
//   discountPrice:(product.price * 0.85).toFixed(2)};
// });



// console.log('addDiscountToClothingCategory',addDiscountToClothingCategory);

//   Task: Group Products by Category
// You have an array of products. Your task is to group the products by their category into an object, where each key is a category name, and the value is an array of products in that category.

const products = [
  { category: "Clothing", name: "Shirt", price: 30 },
  { category: "Clothing", name: "Jeans", price: 50 },
  { category: "Electronics", name: "Phone", price: 500 },
  { category: "Clothing", name: "Jacket", price: 100 },
  { category: "Furniture", name: "Sofa", price: 400 },
  { category: "Electronics", name: "Laptop", price: 1000 }
];

let clothing: any[] = [];
let electronics: any[] = [];
let furniture: any[] = [];


let groupingProductsByClothingCategory = products.filter((product) =>
  product.category === 'Clothing'
);

let groupingProductsByElectronicsCategory = products.filter((product) =>
  product.category === 'Electronics'
);

let groupingProductsByFurnitureCategory = products.filter((product) =>
  product.category === 'Furniture'
);

let result ={ clothing:groupingProductsByClothingCategory,
  electronics:groupingProductsByElectronicsCategory,
  furniture:groupingProductsByFurnitureCategory
}

console.log('result',result);



// const products = [
//   { category: "Clothing", name: "Shirt", price: 30 },
//   { category: "Clothing", name: "Jeans", price: 50 },
//   { category: "Electronics", name: "Phone", price: 500 },
//   { category: "Clothing", name: "Jacket", price: 100 },
//   { category: "Furniture", name: "Sofa", price: 400 },
//   { category: "Electronics", name: "Laptop", price: 1000 }
// ];

// const groupedProducts = products.reduce((result, product) => {
//   const { category } = product;
//   if (!result[category]) {
//     result[category] = [];
//   }
//   result[category].push(product);
//   return result;
// }, {});

// console.log('Grouped Products:', groupedProducts);


