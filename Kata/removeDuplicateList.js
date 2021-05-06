/* Remove duplicates from list (8kyu)
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/


function distinct(a) {
    let b = []
    for(let i = 0; i < a.length; i++){
      if(!b.includes(a[i])){
        b.push(a[i])
      }
    }
    return b
  }

  //using set 
function distinct(a) {
    return [...new Set(a)];
}