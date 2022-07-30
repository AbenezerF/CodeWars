// Contamination #1 -String-(8Kyu)



function contamination(text, char){
  let string = char.repeat(text.length)
  return char === "" ? "": string
}
