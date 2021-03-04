/* Round up to the next multiple of 5 (7kyu)

Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

*/


function roundToNext5(n){
    if(n % 5 === 0) return n;
    if(n >= 0 ){
      let r = n % 5
      return n + (5 - r)
    }else{
      let r = n % 5
      return  n + Math.abs(r)
    }
  }