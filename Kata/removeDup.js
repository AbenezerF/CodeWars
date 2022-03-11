// Simple Remove Duplicates (7Kyu)

/*
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!

*/


function solve(arr) {
  let final = [];
  arr = arr.reverse();
  for(let i = 0; i < arr.length; i++){
    if(!final.includes(arr[i])){
      final.push(arr[i])
    }
  }
  return final.reverse();
}


// Best practice solution
function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}
