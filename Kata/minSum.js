//Minimize Sum Of Array (Array Series #1) (7Kyu)

/*
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size

Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
*/

function minSum(arr) {
  let total = 0;
  arr = arr.sort((a,b) => a -b);
  for(let i =0; i < arr.length; i++){
    total += arr[i] * arr[arr.length-i-1];
  }
  return total/2;
}
