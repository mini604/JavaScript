function generatePrimesGreaterThanN(p, n) {
    const primes = [];
    let num = n + 1; // Start checking from the number greater than n
  
    while (primes.length < p) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
  
    return primes;
  }
  
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // The number is divisible, hence not prime
      }
    }
  
    return true; // The number is prime
  }
  
  // Example usage:
  const numberOfPrimes = 5;
  const startNumber = 10;
  const primesGreaterThanN = generatePrimesGreaterThanN(numberOfPrimes, startNumber);
  console.log(`The first ${numberOfPrimes} prime numbers greater than ${startNumber} are:`, primesGreaterThanN);
  