// Vowel Count (7Kyu)
/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

export class Kata {
  static getCount(str: string): number {
    let total = 0
    let v: String[] = ["a", "e", "i", "o", "u"]
    for(let i = 0; i < str.length; i++){
      if(v.includes(str[i])) total++;
    }
    return total
  }
}
