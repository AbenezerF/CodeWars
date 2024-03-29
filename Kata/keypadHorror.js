// Keypad horror (7Kyu)

/*
Having two standards for a keypad layout is inconvenient!
Computer keypad's layout:
7 8 9  \n
4 5 6  \n
1 2 3  \n
  0 \n

Cell phone keypad's layout:
1 2 3\n 
4 5 6\n  
7 8 9\n  
  0\n

Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only
*/

function computerToPhone(numbers){
  let fin = []
  let num = numbers.split('').map( x => Number(x))
  for(let i = 0; i < num.length; i++){
    if(num[i] > 6) fin.push(num[i] - 6);
    else if(num[i] < 4 && num[i] >= 1) fin.push(num[i] + 6);
    else fin.push(num[i]);
  }
  return fin.join('');
}
