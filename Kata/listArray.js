

/*

*/


function listToArray(list) {
    var temp = [];
    while(list){
      temp.push(list.value);
      list = list.next;
    }
    return temp;
  }