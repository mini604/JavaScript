

//Print the first 100 prime numbers

function generatePrimes(count) {
    const primes = [];
    let num = 2;
  
    while (primes.length < count) {
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
  
  
  const first100Primes = generatePrimes(100);
  console.log("The first 100 prime numbers are:", first100Primes);
  