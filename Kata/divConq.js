// Divide and Conquer (7Kyu)

/*
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/


function divCon(x){
  let ints = x.filter( y => typeof y === 'number');
  let strings = x.filter( y => typeof y === 'string');
  
  let totInts = ints.reduce( (acc, curr) => acc += curr, 0);
  let totString = strings.reduce( (acc, curr) => acc += +curr, 0)
  
 return totInts - totString
}
