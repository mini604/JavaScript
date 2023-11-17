
//Create a function that converts a string to an array of characters

function stringToArray(str) {
    return Array.from(str);
  }
  
  
  const inputString = "Hello, World!";
  const charArray = stringToArray(inputString);
  console.log("Original String:", inputString);
  console.log("Array of Characters:", charArray);
  