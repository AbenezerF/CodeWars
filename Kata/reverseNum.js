// Reverse a Number Kata (7kyu)
/*
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1
*/

function reverseNumber(n) {
  if(n < 0){
    n *= -1;
    return Number(n.toString().split('').reverse().join('')) * -1;
  }
  return Number(n.toString().split('').reverse().join(''))
}
