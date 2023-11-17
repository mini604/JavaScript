
/*Create a function that will receive an array of numbers as argument and will return a new array with distinct elements*/

function getDistinctElements(arr) {
    return [...new Set(arr)];
  }
  
 
  const arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 1];
  const distinctArray = getDistinctElements(arrayWithDuplicates);
  console.log("Original Array:", arrayWithDuplicates);
  console.log("Distinct Array:", distinctArray);
  