// Lost number in number sequence (7kyu)



function findDeletedNumber(arr, mixArr) {
  let newArr = mixArr.sort( (a,b) => a -b)
  if(arr.length === newArr.length) return 0
  for(let i = 0; i < arr.length;i++){
    if(arr[i] !== newArr[i]) return arr[i]
  }
}
