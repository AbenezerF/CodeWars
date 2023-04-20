// Most digits (7Kyu)

/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

*/

function findLongest(array){
  let arr = array.map( (x) => x.toString()).sort( (a,b) => a.length-b.length);
  let maxLength = arr[arr.length-1].length;
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length === maxLength) return Number(arr[i])
  }
}
