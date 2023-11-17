

//Create a function that will capitalize the first letter of each word in a text 

function capitalizeWords(text) {
    return text.replace(/\b\w/g, match => match.toUpperCase());
  }
  
  // Example usage:
  const inputText = "this is a sample text with several words.";
  const capitalizedText = capitalizeWords(inputText);
  console.log("Original Text:", inputText);
  console.log("Capitalized Text:", capitalizedText);
  