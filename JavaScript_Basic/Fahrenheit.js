function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  // Example usage:
  const fahrenheitValue = 77;
  const celsiusValue = fahrenheitToCelsius(fahrenheitValue);
  console.log(`${fahrenheitValue} degrees Fahrenheit is ${celsiusValue} degrees Celsius`);
  