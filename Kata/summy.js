// Summy (7kyu)

/*
Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.

Example
summy("1 2 3")  ==> 6

*/

function summy(stringOfInts){
    return stringOfInts.split(' ').map(x => +x).reduce((curr,prev) => curr + prev, 0);
}
