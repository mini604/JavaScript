

//Create afunction that will return aBoolean specifying if anumber is prime

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // The number is divisible, hence not prime
      }
    }
  
    return true; // The number is prime
  }
  
  
  const num1 = 7;
  const num2 = 12;
  
  console.log(`${num1} is prime: ${isPrime(num1)}`);
  console.log(`${num2} is prime: ${isPrime(num2)}`);
  