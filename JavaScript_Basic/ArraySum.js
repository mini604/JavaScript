function sumArray(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum;
  }
  
  // Example usage:
  const numbersArray = [1, 2, 3, 4, 5];
  const result = sumArray(numbersArray);
  console.log(`The sum of the numbers is: ${result}`);
  