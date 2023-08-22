// Break camelCase (6Kyu)

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  let newStr = string[0].toUpperCase() + string.slice(1);
  let arr = newStr.match(/[A-Z][a-z]+/g).join(' ');
  return arr[0].toLowerCase() + arr.slice(1)
}
