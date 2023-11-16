function filterPositiveNumbers(numbers) {
    return numbers.filter(number => number > 0);
  }
  
  // Example usage:
  const inputArray = [-2, 5, 0, -7, 3, 8, -1];
  const positiveNumbers = filterPositiveNumbers(inputArray);
  console.log("Positive numbers:", positiveNumbers);