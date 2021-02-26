/* Two to One
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, 
the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
    let final = [];
    let arr1 = s1.split('');
    let arr2 = s2.split('');
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    arr1.forEach(val =>{
      if(!final.includes(val)){
          final.push(val);
      }
    })
    arr2.forEach(val =>{
      if(!final.includes(val)){
          final.push(val);
      }
    })
    final = final.sort().join('');
    return final;
  }