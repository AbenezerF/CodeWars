

/*

*/


function count(array){
    var names = {};
    array.forEach(item => {
      names[item] = (names[item] || 0) + 1;
    });
    return names;
  }