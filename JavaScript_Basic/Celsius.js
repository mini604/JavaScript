

//Create a function that will convertfrom Celsius to Fahrenheit 

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;                         //formula celsous to hahrenheit
  } 
  
  
  const celsiusValue = 25;
  const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
  console.log(`${celsiusValue} degrees Celsius is ${fahrenheitValue} degrees Fahrenheit`);  //result print
  