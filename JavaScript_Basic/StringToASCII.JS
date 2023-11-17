
/*Create afunction that will convert astring in an array containing the ASCII codes of
each character*/


function stringToAsciiArray(str) {
    return Array.from(str, char => char.charCodeAt(0));
  }
  
  
  const inputString = "Hello, World!";
  const asciiArray = stringToAsciiArray(inputString);
  console.log("Original String:", inputString);
  console.log("ASCII Array:", asciiArray);
  