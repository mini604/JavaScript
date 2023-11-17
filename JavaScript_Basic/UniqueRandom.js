
/*Create a function that will receive n as argument and return an array of n
random numbers from 1 to n.The numbers should be unique inside the array*/

function generateUniqueRandomNumbers(n) {
    if (n <= 0) {
      console.error("Please provide a positive integer.");
      return [];
    }
  
    // Initialize an array with numbers from 1 to n
    const initialArray = Array.from({ length: n }, (_, index) => index + 1);
  
    // Fisher-Yates (Knuth) Shuffle to randomize the array
    for (let i = initialArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [initialArray[i], initialArray[j]] = [initialArray[j], initialArray[i]];
    }
  
    // Return the first n elements of the shuffled array
    return initialArray.slice(0, n);
  }
 
  
  const numberOfRandomNumbers = 5;
  const randomNumbersArray = generateUniqueRandomNumbers(numberOfRandomNumbers);
  
  console.log(`Generated ${numberOfRandomNumbers} unique random numbers:`, randomNumbersArray);
  