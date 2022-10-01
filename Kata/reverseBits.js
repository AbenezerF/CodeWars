// Reverse the bits in an integer (7Kyu)

/*

*/

function reverseBits (n) {
  let val = n.toString(2).split('').reverse().join('')
  return Number.parseInt(val, 2)
}
