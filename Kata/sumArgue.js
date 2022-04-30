// Sum of all arguments (7kyu)

/*

*/

function sum() {
    var total = 0;
    for(var i in arguments){
      total += arguments[i];
    }
    return total;
  }
