/* Sum Mixed Array (8kyu)
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/


function sumMix(x){
    let sum = 0;
    for(let val of x){
      sum += Number(val);
    }
    return sum;
  }

// using in-built methods
  function sumMix(x){
    return x.map((a) => +a).reduce((acc,curr) => acc + curr);
 }
