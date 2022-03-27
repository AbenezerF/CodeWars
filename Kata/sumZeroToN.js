// Sum of numbers from 0 to N (7Kyu)

/*
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0

*/

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let final = 0;
    let str = '0';
    for(let i = 1; i <= count; i++){
      final += i;
      str += `+${i}`;
    }
    if(count === 0) return `${count}=0`
    return count < 0 ? `${count}<0` : str + ` = ${final}`;
  };

  return SequenceSum;

})();
