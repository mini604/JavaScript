

//Find the maximum number in a jagged array of numbers or array of numbers

function findMaxInJaggedArray(arr) {
    let maxNumber = -Infinity;
  
    for (const element of arr) {
      if (Array.isArray(element)) {
        // If the element is an array, recursively call the function
        const maxInSubarray = findMaxInJaggedArray(element);
        maxNumber = Math.max(maxNumber, maxInSubarray);
      } else if (typeof element === 'number') {
        // If the element is a number, update maxNumber if needed
        maxNumber = Math.max(maxNumber, element);
      }
      // Ignore non-number, non-array elements
    }
  
    return maxNumber;
  }
  
  // Example usage:
  const jaggedArray = [1, [2, 3, [4, 5], 6], [7, [8, 9]]];
  const maxNumber = findMaxInJaggedArray(jaggedArray);
  console.log("Jagged Array:", jaggedArray);
  console.log("Maximum Number in Jagged Array:", maxNumber);
  