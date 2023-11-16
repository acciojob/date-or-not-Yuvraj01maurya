var isDate = function (input) {
  //   write your code here
	if (input instanceof Date && !isNaN(input)) {
    return true; // If input is already a Date object and is valid
  }

  if (typeof input === 'string' || typeof input === 'number') {
    const date = new Date(input);
    return date instanceof Date && !isNaN(date); // Check if the input string or number can be parsed into a valid Date
  }

  return false; 
}

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

