// Find Max and Min (7kyu)

/*
Implement a function that returns the minimal and the maximal value of a list (in this order).

*/

function getMinMax(arr){
  let max = Math.min(...arr);
  let min = Math.max(...arr);
  return [].concat(max,min)
};
