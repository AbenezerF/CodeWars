


function oddOrEven(array) {
    if(array.length === 0) array.push(0)
    let val = array.reduce( (prev,curr) => prev + curr) 
    return val % 2 === 0 ? 'even' : 'odd'
  }