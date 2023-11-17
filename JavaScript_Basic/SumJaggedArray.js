

/*Create a function to calculate the sum of all the numbers in a jagged array
(contains numbers or other arrays of numbers on an unlimited number of
    levels)*/


    function sumJaggedArray(arr) {
        let sum = 0;
      
        for (const element of arr) {
          if (Array.isArray(element)) {
            // If the element is an array, recursively call the function
            sum += sumJaggedArray(element);
          } else if (typeof element === 'number') {
            // If the element is a number, add it to the sum
            sum += element;
          }
          // Ignore non-number, non-array elements
        }
      
        return sum;
      }
      
      
      const jaggedArray = [1, [2, 3, [4, 5], 6], [7, [8, 9]]];
      const result = sumJaggedArray(jaggedArray);
      console.log("Jagged Array:", jaggedArray);
      console.log("Sum of Numbers in Jagged Array:", result);
      