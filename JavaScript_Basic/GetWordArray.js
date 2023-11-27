

//Create a function thatreturns an array with words inside a text

function getWordsArray(text) {
    // Remove leading and trailing whitespaces and split the text into words
    const wordsArray = text.trim().split(/\s+/);
  
    return wordsArray;
  }
  
  
  
  const text = "This is a sample text with several words.";
  const wordsArray = getWordsArray(text);
  console.log("Words Array:", wordsArray);
  