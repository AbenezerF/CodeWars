// Power (8kyu)

/*
The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

Examples
numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000
Note: Math.pow and some other Math functions like eval() and ** are disabled.
*/


function numberToPower(number, power){
  let total = 1;
  let i = 0;
  while(i < power){
    i++
    total *= number;
  }
  return total
}

