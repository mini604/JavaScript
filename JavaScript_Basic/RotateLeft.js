
//Rotate an array to the left 1 position

function rotateLeftByOne(arr) {
    if (arr.length <= 1) {
      return arr; // No need to rotate for arrays with 0 or 1 element
    }
  
    const firstElement = arr.shift(); // Remove the first element
    arr.push(firstElement); // Add the first element to the end
  
    return arr;
  }
  
  
  const originalArray = [1, 2, 3, 4, 5];
  const rotatedArray = rotateLeftByOne(originalArray);
  console.log("Original Array:", originalArray);
  console.log("Rotated Array:", rotatedArray);
  