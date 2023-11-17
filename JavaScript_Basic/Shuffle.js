

//Shuffle an array of strings

function shuffleArray(array) {
    // Clone the array to avoid modifying the original array
    const shuffledArray = array.slice();
  
    // Fisher-Yates (Knuth) Shuffle
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
  }
  
  
  const originalArray = ["apple", "banana", "cherry", "date", "elderberry"];
  const shuffledArray = shuffleArray(originalArray);
  
  console.log("Original Array:", originalArray);
  console.log("Shuffled Array:", shuffledArray);
  