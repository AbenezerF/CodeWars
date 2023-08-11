// Complete The Pattern #6 - Odd Ladder (7Kyu)

/*
###Task:

You have to write a function pattern which creates the following pattern (see examples) up to the desired number of rows.

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

If any even number is passed as argument then the pattern should last upto the largest odd number which is smaller than the passed even number.

###Examples:

pattern(9):

1
333
55555
7777777
999999999
pattern(6):

1
333
55555
Note: There are no spaces in the pattern

Hint: Use \n in string to jump to next line
*/

function pattern(n){
  var output="";
  for(let i = 1; i <= n; i+=2){
    output += i.toString().repeat(i) + '\n';
  }
 return output.slice(0,output.length-1)
}
