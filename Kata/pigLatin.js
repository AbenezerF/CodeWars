// Simple Pig Latin (5Kyu)


/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str){
  let arr = str.split(' ');
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == '!' || arr[i] == '.' || arr[i] == '?') continue;
    arr[i] = arr[i].substring(1) + arr[i].substring(0,1) + 'ay';
  }
  return arr.join(' ');
}
