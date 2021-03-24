/* Two Oldest Ages(7 kyu)
The two oldest ages function/method needs to be completed. It should take an 
array of numbers as its argument and return the two highest numbers within the array. 
The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always 
include at least 2 items.

For example:

twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]
*/

// return the two oldest/oldest ages within the array of ages passed in.
// shorter solution
function twoOldestAges(ages){
    return ages.sort( (a,b) => a -b).slice(-2)
}

// return the two oldest/oldest ages within the array of ages passed in.
// another solution
function twoOldestAges(ages){
    ages = ages.sort( (a,b) =>  a - b );
    let age = ages.slice( (ages.length -2), ages.length)
    return age
  }