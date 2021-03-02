/* Shortest Word (7kyu)
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    let arr = s.split(' ')
    let shortest = arr[0].length
    for(let i in arr){
      if(arr[i].length < shortest){
          shortest = arr[i].length
      }
    }
    return shortest
  }