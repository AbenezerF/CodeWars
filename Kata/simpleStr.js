// Simple string characters (7Kyu)
/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/

const solve = x => {
  let a = x.match(/[A-Z]/g)||[];
  let b = x.match(/[a-z]/g)||[];
  let c = x.match(/[0-9]/g)||[];
  let d = x.match(/[^A-Z0-9]/gi)||[];
  return [a.length, b.length, c.length, d.length];
}
