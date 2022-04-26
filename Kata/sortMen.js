



function menFromBoys(arr){
    let evens = arr.filter( x => x % 2 === 0).sort( (a,b) =>  a- b) 
    let odds = arr.filter( x => x % 2 !== 0).sort((a,b) =>  b- a)
    let arrs = []
    evens.forEach(x => {
      if(!arrs.includes(x)) arrs.push(x)
    })
    odds.forEach(x => {
      if(!arrs.includes(x)) arrs.push(x)
    })
    return arrs
  }