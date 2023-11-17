

//Calculate the average of the numbers in an array of numbers


function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0; // Avoid division by zero for an empty array
    }
  
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum / numbers.length;
  }
  
 
  const numbersArray = [1, 2, 3, 4, 5];
  const average = calculateAverage(numbersArray);
  console.log(`The average of the numbers is: ${average.toFixed(2)}`);
  