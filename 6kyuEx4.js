// Write a function that takes an integer as input, 
// and returns the number of bits that are equal to
// one in the binary representation of that number.
// You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010,
//  so the function should return 5 in this case

var countBits = function(n) {
  	let result=0;
	let sum = 0;
	result = n.toString(2);



  	for(let i = 0; i < result.length; i++) {
  		sum = sum + parseInt(result[i]);
  		console.log(sum)
  	}




	return sum

  };

  countBits(1234);