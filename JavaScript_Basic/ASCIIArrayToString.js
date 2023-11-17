
//Create a function that will convert an array containingASCII codes in a string

function asciiArrayToString(asciiArray) {
    return String.fromCharCode(...asciiArray);
  }
  
 
  const asciiArray = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33];
  const resultString = asciiArrayToString(asciiArray);
  console.log("ASCII Array:", asciiArray);
  console.log("Resulting String:", resultString);
  