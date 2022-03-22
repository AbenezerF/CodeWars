// Remvoe Duplicate Words Kata

/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

function removeDuplicateWords (s) {
  let arr = s.split(' ');
  let set = new Set();
  arr.forEach( x => set.add(x));
  let final = '';
  set.forEach( x => final += x + ' ');
  return final.substring(0, final.length-1)
}
