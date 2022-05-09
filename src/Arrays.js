import React from 'react'
import emojipedia from './emojipedia';

const newArray = emojipedia.map((emoji) => {
  return emoji.meaning.substring(0, 100);
})
console.log(newArray)

const numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x) {
  return x * 2;
}
const newNumbers = numbers.map(double);
console.log(newNumbers);//[ 6, 112, 4, 96, 10 ] or

const newNumbers2 = numbers.map(function (x) {
  return x * 2;
})

/*with for.Each
const newNumbers1 = [];
function double(x) {
  newNumbers1.push(x * 2);
}
numbers.forEach(double);
console.log(newNumbers1); or better

const newNumbers1 = [];
numbers.forEach(function (x) {
  newNumbers1.push(x * 2)
});
*/

//Filter - Create a new array by keeping the items that return true.

const newNumbers3 = numbers.filter(function (num) {
  return num > 10;
});
console.log(newNumbers3);//56, 48 or with for.Each

const newNumbers4 = [];
numbers.forEach(function (num) {
  if (num > 10) {
    newNumbers4.push(num)
  }
})

//Reduce - Accumulate a value by doing something to each item in an array.

const newNumber6 = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber
})
console.log(newNumber6);//114 or with for.Each

let newNumber5 = 0;
numbers.forEach(function (currentNumber) {
  newNumber5 += currentNumber;
})
console.log(newNumber5);//114

//Find - find the first item that matches from an array.

const newNumber7 = numbers.find(function (num) {
  return num > 10;
})
console.log(newNumber7);//56



//FindIndex - find the index of the first item that matches.
const newNumber8 = numbers.findIndex(function (num) {
  return num > 10;
})
console.log(newNumber8);//index no 1


function Arrays() {
  return (
    <div></div>
  )
}

export default Arrays;

