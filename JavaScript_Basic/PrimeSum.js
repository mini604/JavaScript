

//Calculate the sum of first 100 prime numbers and return them in an array

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
  
  function sumOfFirstNPrimes(n) {
    const primes = generatePrimes(n);
    const sum = primes.reduce((acc, curr) => acc + curr, 0);
    return { primes, sum };
  }
  
  
  const result = sumOfFirstNPrimes(100);
  console.log("The first 100 prime numbers are:", result.primes);
  console.log("The sum of the first 100 prime numbers is:", result.sum);
  