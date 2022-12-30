// Simple string reversal (7kyu)
/*
In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.
*/

function solve(str){
   //..
  let splitStr = str.split('')
  let reverseStr = str.split(' ').join('').split('').reverse()
  for (let i = 0; i <= splitStr.length; i++){
    if (splitStr[i] === ' ') {
      reverseStr.splice(i, 0, ' ');
    }
  }
  return reverseStr.join('');
}
