

//Print allthe multiplication tables with numbers from 1 to 10

let i,j;

for ( i = 1; i <= 10; i++) {
    console.log(`Multiplication table for ${i}:`);     //tabel 1 to 10

    for ( j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);    //Table Format
    }
    console.log(); //  empty line for better readability
  }