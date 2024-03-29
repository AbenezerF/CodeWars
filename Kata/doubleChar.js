/* Double Char (8kyu)
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"
doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
doubleChar("1234!_ ") ==> "11223344!!__  "

*/

function doubleChar(str) {
    return str.split("").map(function (c) {
      return c + c;
    }).join("");
  }
