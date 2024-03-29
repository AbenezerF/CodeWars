/* Find the stray number (7kyu)
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {
    var a = numbers.sort();
    
    if(a[0] != a[1]) {
      return a[0];
    } 
    return a[a.length-1];
  }

// another solution
function stray(numbers) {
  let num = numbers.sort((a,b) => a - b);
  if(num[0] !== num[1]) return num[0]
  else return num[num.length-1]
}
