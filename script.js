// Complete this js code
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  // Adjusted to match the expected output format
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
};

function Employee(name, age, jobTitle) {
  // Call the Person constructor to initialize name and age
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype for Employee
Employee.prototype = Object.create(Person.prototype);

// Correct the constructor reference for Employee
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  // Adjusted to match the expected output format
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
