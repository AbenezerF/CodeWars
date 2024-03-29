/* Thinkful - Logic Drills: Traffic light (8kyu)
You're writing code to control your town's traffic lights. You need a function to handle each change from green, 
to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a 
string representing the state the light should change to.

For example, update_light('green') should return 'yellow'
*/

function updateLight(current) {
    if(current === 'red'){
      return 'green';
    }else if(current === 'yellow'){
      return 'red';
    }else{
      return 'yellow';
    }
  }

// using ternary operator
  function updateLight(current) {
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  }
