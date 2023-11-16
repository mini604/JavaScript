function printFibonacciNumbers(n) {
    let fib = [0, 1];
  
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    return fib;
  }
  
  // Example usage:
  const n = 10;
  const fibonacciNumbers = printFibonacciNumbers(n);
  console.log(`The first ${n} Fibonacci numbers are: ${fibonacciNumbers.join(', ')}`);
  