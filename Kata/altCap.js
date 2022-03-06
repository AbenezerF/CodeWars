// Alternate Capitalization (7Kyu)

/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/


function capitalize(s){
  let str = '';
  let str1 = '';
  let arr = [];
  for(let i = 0; i < s.length; i++){
    if(i % 2 === 0){
      str = str + s[i].toUpperCase();
    }else{
      str = str + s[i];
    }
  }
  for(let i = 0; i < s.length; i++){
    if(i % 2 !== 0){
      str1 = str1 + s[i].toUpperCase();
    }else{
      str1 = str1 + s[i];
    }
  }
  return arr.concat(str,str1);
};
