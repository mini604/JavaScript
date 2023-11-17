

//Deep copy a jagged array with numbers or other arrays in a new array 

function deepCopyJaggedArray(arr) {
    return arr.map(element => {
      if (Array.isArray(element)) {
        // If the element is an array, recursively call the function
        return deepCopyJaggedArray(element);
      } else if (typeof element === 'number') {
        // If the element is a number, simply return it
        return element;
      }
      // Ignore non-number, non-array elements
    });
  }
  
 
  const originalArray = [1, [2, 3, [4, 5], 6], [7, [8, 9]]];
  const copiedArray = deepCopyJaggedArray(originalArray);
  
  console.log("Original Jagged Array:", originalArray);
  console.log("Copied Jagged Array:", copiedArray);
  