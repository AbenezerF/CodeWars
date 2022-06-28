// Counting Array Elements (7Kyu)

/*
Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}
*/


function count(array){
    var names = {};
    array.forEach(item => {
      names[item] = (names[item] || 0) + 1;
    });
    return names;
  }
