

function removeSmallest(numbers) {
    let small = numbers[0];
    let arr = [];
    for(let i = 0; i < numbers.length; i++){
      if(numbers[i] < small){
        small = numbers[i];
      }
    }
    for(let i = 0; i < numbers.length; i++){
      arr.push(numbers[i]);
    }
    let ind = arr.findIndex(rank => rank === small);
    let removed = arr.splice(ind, 1);
    return arr;
}
