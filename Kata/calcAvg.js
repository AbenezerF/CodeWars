/* Calculate average (8kyu)
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0
*/

function find_average(array) {
    let sum = array.reduce((a, b) => a + b, 0);
    return sum/array.length;
}
