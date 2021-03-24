/* String repeat (8 kyu)
Write a function called repeat_string which repeats the given string str exactly 
count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

*/

function repeatStr (n, s) {
    let string =''
    for(let i = 0; i < n; i++){
      string += s
    }
    return string;
}