function findMaxNumber(numbers) {
    if (numbers.length === 0) {
      return undefined; // Return undefined for an empty array
    }
  
    let max = numbers[0]; // Assume the first element is the maximum
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return max;
  }
  
  // Example usage:
  const numbersArray = [2, 7, 1, 8, 4, 5];
  const maxNumber = findMaxNumber(numbersArray);
  console.log(`The maximum number is: ${maxNumber}`);
  