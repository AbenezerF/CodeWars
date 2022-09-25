// Largest Elements (7Kyu)

/*
Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/


function largest(n,xs){
  let final = []
  let arr = xs.sort( (a,b) => a -b)
  for(let i = arr.length-n; i < arr.length; i++){
    final.push(arr[i])
  }
  return final
}
