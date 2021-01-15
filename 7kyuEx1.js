// Create a function that returns the sum of the two lowest positive numbers
// given an array of minimum 4 positive integers.
//  No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.


function sumTwoSmallestNumbers(numbers) {  
let a;
let b;
  
var arr = new Uint32Array(numbers)
arr = arr.sort();

a = arr[0];
b = arr[1];

console.log(a);
console.log(b);
return a+b;

  }