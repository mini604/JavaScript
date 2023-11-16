function getDistinctElements(arr) {
    return [...new Set(arr)];
  }
  
  // Example usage:
  const arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 1];
  const distinctArray = getDistinctElements(arrayWithDuplicates);
  console.log("Original Array:", arrayWithDuplicates);
  console.log("Distinct Array:", distinctArray);
  