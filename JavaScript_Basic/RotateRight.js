function rotateRightByOne(arr) {
    if (arr.length <= 1) {
      return arr; // No need to rotate for arrays with 0 or 1 element
    }
  
    const lastElement = arr.pop(); // Remove the last element
    arr.unshift(lastElement); // Add the last element to the beginning
  
    return arr;
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 5];
  const rotatedArray = rotateRightByOne(originalArray);
  console.log("Original Array:", originalArray);
  console.log("Rotated Array:", rotatedArray);
  