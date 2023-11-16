function symmetricDifference(arr1, arr2) {
    const uniqueToArr1 = arr1.filter(num => !arr2.includes(num));
    const uniqueToArr2 = arr2.filter(num => !arr1.includes(num));
    
    return uniqueToArr1.concat(uniqueToArr2);
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 4];
  const array2 = [3, 4, 5, 6];
  const resultArray = symmetricDifference(array1, array2);
  console.log("Array 1:", array1);
  console.log("Array 2:", array2);
  console.log("Symmetric Difference:", resultArray);
  