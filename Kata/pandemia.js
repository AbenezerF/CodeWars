// Pandemia (7Kyu)
/*
Your task is to find the percentage of human population that got infected in the end.

☑️ Return the percentage % of the total population that got infected.

❗❗ The first and the last continent are not connected!

💡 Example:

 start: map1 = "01000000X000X011X0X"
 end:   map1 = "11111111X000X111X0X"
 total = 15
 infected = 11
 percentage = 100*11/15 = 73.33333333333333
➕ For maps without oceans "X" the whole world is connected.

➕ For maps without "0" and "1" return 0 as there is no population.
*/

function infected(s) {
  let arr = s.split('X');
  let infected = 0;
  let total = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i].includes("1")) infected +=arr[i].length
    total += arr[i].length
  }
  return infected === 0 ? 0 : (infected / total) * 100
}
