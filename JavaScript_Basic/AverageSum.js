var myArray = [0, 1, 2, 3, 4, 5, ];

var sum = 0;

for (var i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}

var average = sum / myArray.length;

console.log(`The sum is: ${sum}. The average is: ${average}.`); //"The sum is: 15. The average is: 2.5."