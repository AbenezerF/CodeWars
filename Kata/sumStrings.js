/* Sum The Strings (8kyu)
Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
*/

function sumStr(a,b) {
    let sum = Number(a) + Number(b);
    return sum.toString();
  }
