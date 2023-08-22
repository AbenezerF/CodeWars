// Break camelCase (6Kyu)

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  let newStr = string[0].toUpperCase() + string.slice(1)
  let arr = newStr.match(/[A-Z][a-z]+/g)
  let final = arr.join(" ")
  return final[0].toLowerCase() + final.slice(1)
}
