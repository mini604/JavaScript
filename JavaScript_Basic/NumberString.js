

/*Create a function that will add two positive numbers of indefinite size.The numbers
are received as strings and the result should be also provided as string.*/

function addStrings(num1, num2) {
    let result = "";
    let carry = 0;
  
    // Make the lengths of num1 and num2 equal by padding with zeros
    while (num1.length < num2.length) {
      num1 = "0" + num1;
    }
    while (num2.length < num1.length) {
      num2 = "0" + num2;
    }
  
    // Iterate from the rightmost digit to the left
    for (let i = num1.length - 1; i >= 0; i--) {
      const digit1 = parseInt(num1[i], 10);
      const digit2 = parseInt(num2[i], 10);
  
      // Add digits and the carry from the previous iteration
      const sum = digit1 + digit2 + carry;
  
      // Calculate the new carry for the next iteration
      carry = Math.floor(sum / 10);
  
      // Append the current digit to the result string
      result = (sum % 10) + result;
    }
  
    // If there is a carry left after the loop, add it to the leftmost side
    if (carry > 0) {
      result = carry + result;
    }
  
    return result;
  }
  
 
  const num1 = "987654321987654321";
  const num2 = "123456789123456789";
  const result = addStrings(num1, num2);
  console.log("Sum:", result);
  