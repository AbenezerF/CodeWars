// Difference between years. (Level 1) (7Kyu)
/*

*/

var howManyYears = function(date1, date2){
  date1 = parseInt(date1.slice(0,4));
  date2 = parseInt(date2.slice(0,4));
  return Math.abs(date1 - date2);
}
