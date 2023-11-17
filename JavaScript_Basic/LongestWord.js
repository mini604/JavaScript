
//Create a function to return the longest word in a string

function findLongestWord(str) {
    const words = str.split(/\s+/);
    let longestWord = '';
  
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  // Example usage:
  const inputString = "This is a sample string with some long words";
  const longestWord = findLongestWord(inputString);
  console.log("Input String:", inputString);
  console.log("Longest Word:", longestWord);
  