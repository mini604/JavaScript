
/*Create afunction that will convert astring containing abinary number into a
number*/

function binaryToDecimal(binaryString) {
    return parseInt(binaryString, 2);
  }
  
  // Example usage:
  const binaryString = "101010";
  const decimalNumber = binaryToDecimal(binaryString);
  console.log(`Binary: ${binaryString} \nDecimal: ${decimalNumber}`);
  