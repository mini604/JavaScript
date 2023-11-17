

//Implement the Caesar cypher

function caesarCipher(str, shift) {
    return str
      .split('')
      .map(char => {
        if (char.match(/[a-zA-Z]/)) {
          const isUpperCase = char === char.toUpperCase();
          const alphabetStart = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
          const charCode = char.charCodeAt(0);
          const shiftedCharCode = ((charCode - alphabetStart + shift) % 26 + 26) % 26 + alphabetStart;
  
          return String.fromCharCode(shiftedCharCode);
        }
        return char;
      })
      .join('');
  }
  
  // Example usage:
  const plaintext = "Hello, World!";
  const shiftAmount = 3;
  const encryptedText = caesarCipher(plaintext, shiftAmount);
  console.log("Plaintext:", plaintext);
  console.log("Encrypted Text:", encryptedText);
  