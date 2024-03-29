// Largest Pair in Array Kata (7Kyu)
/*

Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
*/

function largestPairSum (numbers) {
  let final = numbers.sort( (a,b) => a -b)
  return final[final.length-2] + final[final.length-1]
}
