
//Create a function that will convertfrom Fahrenheit to Celsius

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;                   //Fahrenheit formula
  }
 
  
  const fahrenheitValue = 77;
  const celsiusValue = fahrenheitToCelsius(fahrenheitValue);
  console.log(`${fahrenheitValue} degrees Fahrenheit is ${celsiusValue} degrees Celsius`);
  