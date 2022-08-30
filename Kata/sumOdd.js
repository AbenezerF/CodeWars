// Sum of Odd Cubed Numbers (7Kyu)

/*
Find the sum of the odd numbers within an array, after cubing the initial integers. 
The function should return undefined if any of the values aren't numbers.
*/

function cubeOdd(arr) {
  if(arr.includes('a') || arr.length === 0) return undefined
let newArr = arr.filter( x => x % 2 !== 0).map( x => x ** 3)
return newArr.reduce( (x,y) => x + y, 0)
}
