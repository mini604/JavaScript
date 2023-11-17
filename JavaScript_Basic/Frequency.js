
/*Find the frequency of letters inside a string.Return the result as an array of
arrays.Each subarray has 2 elements:letter and number of occurrences*/


function letterFrequency(str) {
    const frequencyMap = {};
  
    // Count the frequency of each letter in the string
    for (const char of str) {
      if (/[a-zA-Z]/.test(char)) {
        const lowercaseChar = char.toLowerCase();
        frequencyMap[lowercaseChar] = (frequencyMap[lowercaseChar] || 0) + 1;
      }
    }
  
    // Convert the frequency map to an array of arrays
    const resultArray = Object.entries(frequencyMap);
  
    return resultArray;
  }
  

  const inputString = "Hello, World!";
  const frequencyResult = letterFrequency(inputString);
  
  console.log("Input String:", inputString);
  console.log("Letter Frequency:", frequencyResult);
  