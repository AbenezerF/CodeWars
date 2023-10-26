// Reverse words (7Kyu)

/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

export function reverseWords(str: string): string {
  let arr: string[] = str.split("").reverse().join("").split(" ").reverse()
  return arr.join(" ");
}
