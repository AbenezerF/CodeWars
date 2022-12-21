// Split Strings(6Kyu)
/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str){
   let final = []
   for(let i = 0; i < str.length-1; i+=2){
     final.push(str[i] + str[i+1])
   }
  if(str.length % 2 !== 0) final.push(str[str.length-1] + '_')
  return final
}
