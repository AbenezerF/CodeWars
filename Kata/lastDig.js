function lastDigit(n, d) {
    let val = n.toString().split('').map( x => parseInt(x))
    if(d >= val.length) return val
    if(d <= 0) return []
    return val.slice(val.length-d, val.length)
  }