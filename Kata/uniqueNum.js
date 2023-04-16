// Find the unique number (6Kyu)

/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/


function findUniq(arr) {
  arr = arr.sort( (a,b) => a - b);
  for(let i = 0; i < arr.length-1; i++){
    if(i == 0 && arr[i] !== arr[i+1]) return arr[i]
    else{
      if(arr[arr.length-1] !== arr[arr.length-2]) return arr[arr.length-1] 
    }
  }
}
