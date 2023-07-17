// Mean vs. Median (7Kyu)

/*
Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

'mean' - in case mean value is larger than median value
'median' - in case median value is larger than mean value
'same' - in case both mean and median share the same value
Reminder: Median

Array will always be valid (odd-length >= 3)
*/

function meanVsMedian(numbers) {
  let avg = numbers.reduce( (curr, prev) => curr + prev, 0) / numbers.length
  let sorted = numbers.sort( (a,b) => a - b)
  if(avg  > sorted[Math.floor(numbers.length/2)]) return 'mean' 
  else if(avg  < sorted[Math.floor(numbers.length/2)]) return 'median' 
  else return 'same'

}
