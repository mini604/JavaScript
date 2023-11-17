

//Create a function to convert a CSV text to a“bi-dimensional” array

function csvToBiDimensionalArray(csvText) {
    const rows = csvText.split('\n');
    const resultArray = [];
  
    for (let i = 0; i < rows.length; i++) {
      const columns = rows[i].split(',');
      resultArray.push(columns);
    }
  
    return resultArray;
  }
  
  
  const csvText = "1,John,Doe\n2,Jane,Smith\n3,Bob,Johnson";
  const biDimensionalArray = csvToBiDimensionalArray(csvText);
  console.log("Bi-Dimensional Array:", biDimensionalArray);
  