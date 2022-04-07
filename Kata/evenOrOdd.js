// Even or Odd - Which is Greater? (7kyu)



function evenOrOdd(str) {
  var odd = str.split('').filter(o => o % 2 != 0).reduce((a,b) => (+a) + (+b));
  var even = str.split('').filter(e => e % 2 == 0).reduce((a,b) => (+a) + (+b));
  if(even > odd) {
    return 'Even is greater than Odd';
  } else if(even < odd) {
    return 'Odd is greater than Even';
  } else {
    return 'Even and Odd are the same';
  }
}
