
//Calculate the sum of digits of a positive integer number

function sumOfDigits(number) {
    // Ensure the input is a positive integer
    if (number < 0 || !Number.isInteger(number)) {
      return "Invalid input. Please provide a positive integer.";
    }
  
    let sum = 0;
    let num = number;
  
    // Iterate through each digit and add to the sum
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
  
    return sum;
  }
  
  // Example usage:
  const positiveInteger = 12345;
  const result = sumOfDigits(positiveInteger);
  console.log(`The sum of digits of ${positiveInteger} is: ${result}`);
  