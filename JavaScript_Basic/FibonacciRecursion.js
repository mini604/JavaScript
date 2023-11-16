function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  // Example usage:
  const n = 7;
  const nthFibonacci = fibonacci(n);
  console.log(`The ${n}th Fibonacci number is: ${nthFibonacci}`);
  