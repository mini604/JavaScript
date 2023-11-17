

//Calculate the sum of numbers received in a comma delimited string

function sumOfNumbersInString(numbersString) {
    // Split the string into an array of numbers
    const numbersArray = numbersString.split(',').map(Number);
  
    // Use the reduce function to calculate the sum
    const sum = numbersArray.reduce((acc, num) => acc + num, 0);
  
    return sum;
  }
  
 
  const numbersString = "1,2,3,4,5";
  const result = sumOfNumbersInString(numbersString);
  console.log(`The sum of numbers in "${numbersString}" is: ${result}`);
  