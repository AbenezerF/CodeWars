// Get key/value pairs as arrays (7Kyu)

/*
Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
*/

function keysAndValues(data){
  // TODO: complete
  let arr = []
  let arr1 = []
  let final = []
  for(let val in data){
    arr.push(val)
    arr1.push(data[val])
  }
  return final.concat([arr], [arr1])
}
