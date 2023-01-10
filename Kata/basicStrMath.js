// Basic Math (Add or Subtract) (7Kyu)
/*
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"

*/

function calculate(str) {
  const num = str.split('plus').join(' ').split('minus').join(' -').split(' ').reduce((a,i)=> a + +i, 0);
  return [] + num;
}