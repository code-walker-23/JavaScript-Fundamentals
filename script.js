"use strict";

/* 
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I can Drive: D");

const private = 2;
 */

/* function logger() {
  console.log("My name is Vinay");
}
logger();
logger();
logger();
// Calling / Running / Invoking the Function
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
// Function is machine that takes some input and return some output and it takes parameters as input
// Pass the Arguements to the Function and takes/store the return Value from the function
const applesJuice = fruitProcessor(5, 0);
console.log(applesJuice);

const applesOrangesJuice = fruitProcessor(2, 4);
console.log(applesOrangesJuice);
//Functions should be DRY(Don't Repeat Yourself)
 */

// we can use the function declaration before their definition
// Function Declaration

/* const age1 = calAge1(1991);
console.log(age1) */

function calAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

const age1 = calAge1(1991);

// Function expression
// We can not use the function expression before their declaration.
// We preferred to use it to avoid bugs such that it declares all the funtions at the top of the code
const calAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calAge2(1991);

console.log(age1, age2);

// Arrow funtions
// Arrow funtions are always anonymous funtions
// Arrow funtions are always expressions
// Arrow funtions are always more concise
// Arrow funtions does not get their own this keyword
// Arrow funtions are best used in the callback functions

const calAge3 = (birthYear) => 2037 - birthYear; // Best for one liner code
const age3 = calAge3(1991);
console.log(age3);

// With Multiple Lines of Code

const yearUntilRetirement1 = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearUntilRetirement1(1991));

//With Multiple Parameters

const yearUntilretirement1 = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilretirement1(1991, "Vinay"));

// Disadvantage of arrow function
// Arrow function does not get their own this keyword
// Arrow function uses this keyword from its parent scope

/* const cutPieces = (fruit) => fruit * 4; */
// Both gives same result.
const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  return `Fruit Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
};

const Juice = fruitProcessor(4, 5);
console.log(Juice);

// if the parameters are the number then it is preferred to return number
// if the parameters are the string then it is preferred to return string

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in the ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
};
 

console.log(yearUntilRetirement(1991, "Vinay"));
console.log(yearUntilRetirement(1960, "Kaku"));
console.log('❤️'); 


// Array

// First Method to declare an array -> This is called Litral Syntax.
const array = ['vinay' , 'kaku' , 58 , 87];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array);

// Second method to declare an array
const num = 78;
const years = new Array(num , array , 1998 , 2002 , 2037); // Array inside the array and variable inside the array.

console.log(years);

//Accessing the last element of the array.

console.log(" This is the last element -> " + years[years.length - 1]);

// Changing the element of the array

array[0] = 'kaku';
console.log(array);

// (Can not assign a whole array to the variable) array = [1,2,3,4];  


const calcAge1 = function(birthYear){
  return 2037 - birthYear;
}

console.log(calcAge(array));  // This will give NaN because we are passing the array as a parameter to the function.


// Array Methods
const arr = ['vinay','kaku',11,23];

// Adding the element at the end  of the array

arr.push('vinay'); // it returns the size of the new array.
console.log(arr);

const res = arr.push(27);
console.log(res,arr);

// Adding the element at the start of the array

arr.unshift('vinay'); // it returns the size of the new array.
console.log(arr);

// Removing the element from the end of the array

arr.pop(); // it returns the removed element.
console.log(arr);

console.log(arr.pop()); // it returns the removed element.
console.log(arr);

// Removing the element from the start of the array

arr.shift();
console.log(arr);
const t = arr.shift(); // it returns the removed element.
console.log(t,arr);


// Finding the index of the element in the array
console.log(arr.indexOf('kaku'));

arr.push('kaku');
console.log(arr.indexOf('kaku'));
console.log(arr);

console.log(arr.indexOf('kaku',2)); // it will start searching from the index 2.

console.log(arr.indexOf('Bob'));// If the element is not present in the array then it will return -1.

// Includes Method
console.log(arr.includes('kaku')); // it returns true if the element is present in the array otherwise false.
console.log(arr.includes(22)); // it returns false because 22 is not a string.
 
// Objects in the JavaScript -> Objects are the key value pairs.
// Objects are the most important data structure in the JavaScript.
// Objects are the collection of the key value pairs.
// Objects are the collection of the properties.
// Objects are the collection of the methods.
// Objects are the collection of the functions.
// Objects are the collection of the arrays.
// Objects are the collection of the objects.
// Objects are the collection of the primitives.
// it is used for unstructured data.
// Order of properties does not matter in the objects.
const kaku = {
  firstname : 'Vinay',
  lastName  : 'Chhabra',
  age       : '2024-2002',
  job       : 'student',
  friends   : ['one','two','three']
};
console.log(kaku);

const jonas = {
  firstName : 'Jonas',
  lastName  : 'Schmedtmann',
  age       : 2037-1998,
  job       : 'Teacher',
  friends   : ['Michael','Peter','Steven']
};

console.log(jonas);

// Accessing the properties of the object
// Dot Notation
console.log(jonas.firstName);
// Bracket Notation
console.log(jonas['firstName']); // We can only use the expression in the bracket notation.
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last'  + nameKey]);

const interestedIn = prompt('what do you want to know about jonas? Choose between firstName, lastName, age, job and friends');

console.log(jonas[interestedIn]);
console.log(jonas.interestedIn); // Because prompts return the string and for dot notation it must be a property// This will give undefined because interestedIn is not the property of the object.

// Adding the properties to the object
// Dot Notation
jonas.location = 'Portugal';
console.log(jonas);

// Bracket Notation
jonas['twitter'] = '@jonaschmedtman';
console.log(jonas);

// Challenge using dot notation

// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends ${jonas.friends}, and his best friend is called ${jonas.friends[0]}`);
 // dot Operator has higher precedence than the template literals.
 // dot operator has higher precedence than the Member Access (.)

// Challenge using Bracket Notation

console.log(`${jonas['firstName']} has ${jonas['friends'].length} friends ${jonas['friends']}, and his best friend is called ${jonas['friends'][0]}`);





