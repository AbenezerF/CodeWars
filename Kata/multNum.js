// Multiply the Number (8Kyu)
/*

Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

multiply(3)==15 // 3 * 5¹
multiply(10)==250 // 10 * 5²
multiply(200)==25000 // 200 * 5³
multiply(0)==0 // 0 * 5¹
multiply(-3)==-15 // -3 * 5¹
*/

function multiply(number){
  let str = number.toString();
  if(number < 0){
    return number * (5**(str.length-1));
  }
  return number * (5**str.length);
}

// No if statement solution
 return number * Math.pow(5, Math.abs(number).toString().length);
