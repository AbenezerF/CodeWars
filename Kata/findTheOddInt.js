/* Find the Odd Int (6kyu)

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/

function findOdd(A) {
    if(A.length === 1){
      return A[0]
    }
    let map = new Map();
    for(let i = 0; i < A.length; i++){
      if(!map.has(A[i])){
        map.set(A[i], 1)
      }else{
        map.set(A[i], map.get(A[i]) + 1 )
      } 
    }
    for(let [key,val] of map.entries()){
      if(val % 2 !== 0 ){
        return key;
      }
    }
  }