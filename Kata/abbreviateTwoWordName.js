/*
Abbreviate a Two Word Name (8 kyu)

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:

Sam Harris => S.H
Patrick Feeney => P.F 
*/
function abbrevName(name){
    name = name.toUpperCase();
    let arr = name.split(' ');
    return `${arr[0].substring(0,1)}.${arr[1].substring(0,1)}`;
  }