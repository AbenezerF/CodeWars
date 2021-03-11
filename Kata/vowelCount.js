/* Vowel Count (7kyu)

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
    let arr = str.match(/[aeiou]/gi)
    return arr === null ? 0 : arr.length
  }

//another solution  
function getCount(str) {
    var vowelsCount = 0;
    let temp = str.length
    str = str.replace(/[a,e,i,o,u]/gi, "")
    vowelsCount = temp - str.length
    return vowelsCount;
  }
