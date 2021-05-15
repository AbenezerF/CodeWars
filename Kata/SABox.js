/* Surface Area and Volume of a Box (8kyu)
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

const getSize = (width, height, depth) => [(width * height + width * depth + height * depth) * 2, width * height * depth];
