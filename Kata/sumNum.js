/* Summing a number's digits (7kyu)
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

  sumDigits(10);  // Returns 1
  sumDigits(99);  // Returns 18
  sumDigits(-32); // Returns 5
Let's assume that all numbers in the input will be integer values.
*/

sumDigits = n => Math.abs(n).toString().split('').reduce((s, e) => s + +e, 0);
