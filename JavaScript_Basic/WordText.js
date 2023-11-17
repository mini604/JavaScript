

//Create a function that willreturn the number of words in a text

function countWords(text) {
    // Remove leading and trailing whitespaces and split the text into words
    const wordsArray = text.trim().split(/\s+/);
  
    // Return the number of words
    return wordsArray.length;
  }
  
  
  const text = "This is a sample text with several words.";
  const numberOfWords = countWords(text);
  console.log(`The text has ${numberOfWords} words.`);
  