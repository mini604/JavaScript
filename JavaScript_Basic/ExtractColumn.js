

/*Create a function that will receive a bi-dimensional array as argument and a
number and will extract as a unidimensional array the column specified by the
number*/

function extractColumn(matrix, columnNumber) {
    return matrix.map(row => row[columnNumber]);
  }
  
  
  const biDimensionalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const columnNumber = 1;
  
  const extractedColumn = extractColumn(biDimensionalArray, columnNumber);
  console.log(`Column ${columnNumber} from the bi-dimensional array:`, extractedColumn);
  