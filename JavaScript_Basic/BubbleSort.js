

//Implement the bubble sort algorithm for an array of numbers

function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements if they are in the wrong order
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
 
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = bubbleSort(unsortedArray.slice()); //  copy to keep the original array unchanged
  console.log("Unsorted Array:", unsortedArray);
  console.log("Sorted Array:", sortedArray);
  