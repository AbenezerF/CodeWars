// Shortest Word (7Kyu)
/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
export function findShort(s: string): number {
  let arr: number[] = s.split(" ").map( (x) => x.length);
  arr = arr.sort( (a,b) => a - b);
  return arr[0]; 
}
