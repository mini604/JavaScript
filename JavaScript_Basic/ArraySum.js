

//Calculate the sum of numbers in an array of numbers 


function sumArray(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {        //numbersArray 1,2,3,4,5
      sum += numbers[i];
    }
  
    return sum;   
  }
  
  const numbersArray = [1, 2, 3, 4, 5];
  const result = sumArray(numbersArray);
  console.log(`The sum of the numbers is: ${result}`);   //result sum = 15
  