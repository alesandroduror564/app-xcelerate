/*
File: sophisticated_code.js
Content: Complex and elaborate code example showcasing various JavaScript features and functionalities.
*/

// Define a class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name} is ${this.age} years old.`;
  }
}

// Create some instances of the Person class
const person1 = new Person("John Doe", 30);
const person2 = new Person("Jane Smith", 25);

// Define a class representing a bank account
class BankAccount {
  constructor(owner, initialBalance) {
    this.owner = owner;
    this.balance = initialBalance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${this.owner}'s account balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`${this.owner} withdrew $${amount}. New balance: $${this.balance}`);
    } else {
      console.log(`${this.owner} does not have sufficient funds to withdraw $${amount}.`);
    }
  }
}

// Create some instances of the BankAccount class
const account1 = new BankAccount(person1.name, 1000);
const account2 = new BankAccount(person2.name, 500);

account1.deposit(250);
account1.withdraw(150);

account2.deposit(100);
account2.withdraw(200);

// Define a function to reverse a string
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return reversedStr;
}

console.log(reverseString("Hello, world!")); // Outputs: "!dlrow ,olleH"

// Define a higher-order function to filter even numbers in an array
const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbers);

console.log(evenNumbers); // Outputs: [2, 4, 6, 8, 10]

// Define a recursive factorial function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Outputs: 120

// Define an async/await function to simulate an API request
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchData(); // Fetches data from an API and logs it to the console

// ... continue with more complex code ...
// (Note: This code is intended to showcase various features and is not a cohesive application)