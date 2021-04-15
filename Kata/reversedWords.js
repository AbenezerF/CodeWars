/* Reversed Words (8kyu)
Complete the solution so that it reverses all of the words within the string passed in.

Example:

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

//Using in built methods
function reverseWords(str){
    return str.split(' ').reverse().join(' '); // reverse those words
  }

// implementation without in built methods
function reverseWords(str){
    let newStr = str.split(' ');
    let result = newStr[newStr.length - 1]
    for(let i= newStr.length -2; i >= 0; i--){
      result = result + " " + newStr[i]
    }
    return result; // reverse those words
  }