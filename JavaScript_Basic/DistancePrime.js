

//Print the distance between the first 100 prime numbers 

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
  
  function calculateDistances(primes) {
    const distances = [];
  
    for (let i = 1; i < primes.length; i++) {
      distances.push(primes[i] - primes[i - 1]);
    }
  
    return distances;
  }
  
  
  const primes = generatePrimes(100);
  const distances = calculateDistances(primes);
  
  console.log("The first 100 prime numbers are:", primes);
  console.log("The distances between consecutive prime numbers are:", distances);
  